import React from "react";
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"
import {
    addMessageTextActionCreator,
    addMessageToDialog,
    addMessageToDialogActionCreator
} from "../../redux/dialogReducer";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogs = props.dialogsData
        .map(dialog => <Dialog name={dialog.name}  id={dialog.id} />)

    let messages = props.messagesData
        .map(message => <Message text={message.message} />)

    let sendMessage = (formData) => {
        props.addMessageToDialog(formData.message);
    }

    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>

                {dialogs}

            </div>

            <div className={style.messages}>

                {messages}

                <MessageReduxForm onSubmit={sendMessage} />

            </div>
        </div>
    );
}


const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"message"} component={"textarea"}/>
        <button>send</button>
    </form>
}

const MessageReduxForm = reduxForm({form: "messageText"})(MessageForm);

export default Dialogs;