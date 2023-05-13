import PusherServer from "pusher"
import PuserClient from "pusher-js"

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "ap2",
    useTLS: true
});


export const pusherClient = new PuserClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
    cluster: "ap2",
    channelAuthorization: {
        endpoint:'/api/pusher/auth',
        transport:'ajax'
    }
});