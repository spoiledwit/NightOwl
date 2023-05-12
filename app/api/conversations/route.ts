import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import primsa from "@/app/libs/prismadb";

export async function POST(
    request: Request,
){
    try {
        const currentUser = await getCurrentUser();
        const body  = await request.json();
        const {
            userId,
            isGroup,
            members,
            name,
         } = body;

        if(!currentUser){
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if(!userId){
            return new NextResponse('Bad Request', { status: 400 });
        }

        const user = await primsa.user.findUnique({
            where: {
                id: userId
            }
        });

        if(!user){
            return new NextResponse('Not Found', { status: 404 });
        }

        if(isGroup && (!members || members.length < 2 || !name)){
            return new NextResponse('Invalid Data', { status: 400 });
        }

        if (isGroup) {
            const newConversation = await primsa.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member:{value:string}) => ({ id: member.value })),
                            { id: currentUser.id },
                        ],
                    },
                },
                include: {
                    users: true,
                },
            });
        
            return NextResponse.json(newConversation);
        } 

        const existingConversations = await primsa.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser.id, userId],
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser.id],
                        },
                    }
                ]
            },
        });

        const singleConversation = existingConversations[0];

        if (singleConversation) {
            return NextResponse.json(singleConversation);
        }

        const newConversation = await primsa.conversation.create({
            data:{
                users: {
                    connect:[
                        {
                            id: currentUser.id
                        },
                        {
                            id: user.id
                        }
                    ]
                }
            },
            include: {
                users:true
            }
        });

        return NextResponse.json(newConversation);

    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}