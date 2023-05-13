import prima from "@/app/libs/prismadb";

const getMessages = async (
    conversationId: string
) => {
    try {
        const messages = await prima.message.findMany({
            where: {
                conversationId: conversationId,
            },
            include:{
                seen: true,
                sender: true,
            },
            orderBy: {
                createdAt: 'asc',
            }
        });
        return messages;
    } catch (error) {
        return [];
    }
}

export default getMessages;