import React from "react";
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageTextActionCreator, addMessageToDialogActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

    let messages = props.state.messagesData
        .map(message => <Message text={message.message}/>)

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageToDialogActionCreator());
    }

    let addMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(addMessageTextActionCreator(text));
    }

    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>

                {dialogs}

            </div>

            <div className={style.messages}>

                {messages}

                <textarea onChange={addMessage} ref={newMessage} value={props.state.newDialogMessage}></textarea>
                <button onClick={sendMessage}>send</button>

            </div>
        </div>
    );
}

export default Dialogs;