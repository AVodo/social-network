import React from "react";
import {addMessageTextActionCreator, addMessageToDialogActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let sendMessage = () => {
        props.dispatch(addMessageToDialogActionCreator());
    }

    let addMessage = (text) => {
        props.dispatch(addMessageTextActionCreator(text));
    }

    return (
        <div>
            <Dialogs sendMessage={sendMessage}
                     addMessage={addMessage}
                     dialogsData={props.state.dialogsData}
                     messagesData={props.state.messagesData}
                     newDialogMessage={props.state.newDialogMessage}/>
        </div>
    );
}

export default DialogsContainer;