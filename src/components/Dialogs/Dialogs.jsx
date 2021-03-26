import React from "react";
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

    let messages = props.state.messagesData
        .map(message => <Message text={message.message}/>)

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>

                {dialogs}

            </div>

            <div className={style.messages}>

                {messages}

                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>send</button>

            </div>
        </div>
    );
}

export default Dialogs;