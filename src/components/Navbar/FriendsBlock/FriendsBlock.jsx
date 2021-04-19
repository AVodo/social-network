import React from "react";
import style from './FriendsBlock.module.css';
import OneFriend from "./OneFriend/OneFriend";

const FriendsBlock = (props) => {

    let friends = props.friendsData
        .map(friend => <OneFriend image={friend.image} name={friend.name} />);

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