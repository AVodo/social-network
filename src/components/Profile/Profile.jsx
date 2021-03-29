import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </div>
    );
}

export default Profile;