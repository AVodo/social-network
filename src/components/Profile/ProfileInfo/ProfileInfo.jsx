import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.small}/><br/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {props.profile.fullName}<br/>
            </div>
        </div>
    );
}

export default ProfileInfo;