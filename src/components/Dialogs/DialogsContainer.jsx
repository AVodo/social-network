import React from "react";
import {addMessageTextActionCreator, addMessageToDialogActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newDialogMessage: state.dialogPage.newDialogMessage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);