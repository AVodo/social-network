import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsD
        .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

    let messages = props.messagesD
        .map(message => <Message text={message.message}/>)

    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>

                {dialogs}

            </div>

            <div className={style.messages}>

                {messages}

            </div>
        </div>
    )
}

export default Dialogs