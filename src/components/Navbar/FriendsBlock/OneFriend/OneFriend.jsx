import React from "react";

const OneFriend = (props) => {
    return (
        <div>
            <img src={props.image}/><br/>
            {props.name}
        </div>
    );
}

export default OneFriend;