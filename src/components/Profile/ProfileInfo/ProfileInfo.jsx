import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

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
                {props.profile.fullName}<br/>
                {props.profile.aboutMe}<br/>
                {props.profile.lookingForAJobDescription}<br/>
            </div>
        </div>
    );
}

export default ProfileInfo;