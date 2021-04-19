import React from "react";
import {addMessageTextActionCreator, addMessageToDialogActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newDialogMessage: state.dialogPage.newDialogMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageToDialogActionCreator());
        },
        addMessage: (text) => {
            dispatch(addMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;