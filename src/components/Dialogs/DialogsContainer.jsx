import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addMessageToDialog} from "../../redux/dialogReducer";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData
    }
}

export default compose(
    connect(mapStateToProps, {addMessageToDialog}),
    //withAuthRedirect
)(Dialogs);