import React from "react";

const User = (props) => {


    return (
        <div>
            {props.fullName}
            {props.followed ? <button onClick={props.startFollow(props.userId)}>follow</button> :
                <button onClick={props.startUnfollow(props.userId)}>unfollow</button>}
        </div>
    );
}

export default User;