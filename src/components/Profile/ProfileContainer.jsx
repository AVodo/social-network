import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=16981;
        }
        profileAPI.getProfileInfo(userId).then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);