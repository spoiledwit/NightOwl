import getConversations from "../actions/getConversation"
import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
    children
}: {
    children: React.ReactNode
}) {

    const users = await getUsers();
    const conversations = await getConversations();

    return (
        //@ts-expect-error Server Component
        <Sidebar>
            <div 
            className="h-full"
            >
                <ConversationList 
                initialItems={conversations}
                users={users}
                />
            {children}
            </div>
        </Sidebar>
    )
}