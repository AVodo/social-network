import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=16981;
        }
        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getProfileInfo, updateUserStatus, getUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
