import { FC } from "react"

export interface User {
    nickname: string
}

export interface Message {
    from_user: User,
    private_message: boolean,
    to_user?: User,
    message: string
}

const message_format = (message:Message) => {
    return (
        <div>
                <p>{message.from_user.nickname}</p>
                <h5>{message.message}</h5>
        </div>
    )
}
const private_message = (message:Message, this_user:User) => {
    return message.to_user === this_user ? message_format(message) : null
}
interface UIProp {
    message_list :Message[],
    this_user:User 
}
//Produces a message list showing messages received to this user
export const MessageBoard:FC<UIProp> = content => {
    const ready_messages = content.message_list
    .map(
        message => message.private_message ? // checks if the message is private, and will only show it if the user is the right person
         private_message(message,content.this_user) : message_format(message) // In case its not private it will generate the message
        )
    .filter(message => message !== null)

    return ( //Creates an unordered list with all the messages rightly treated
        <div>
                {ready_messages}
        </div>
    )
}