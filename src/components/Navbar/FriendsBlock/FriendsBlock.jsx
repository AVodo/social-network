import React from "react";
import style from './FriendsBlock.module.css';

const FriendsBlock = (props) => {
    let friends = props.state.friendsData
        .map(friend => {
            return (
                <div>
                    <img src={friend.image}/><br/>
                    {friend.name}
                </div>
            );
        });

    return (
        <div>
            <h2>Friends</h2>
            <div className={style.item}>
                {friends}
            </div>
        </div>
    );
}

export default FriendsBlock;