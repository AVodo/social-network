import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


const Users = (props) => {

    let totalPages = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => <span className={page === props.page && style.selectedPage}
                                         onClick={() => {props.onPageChanged(page)}}>{page}</span>)}
            </div>
            {props.users.map(user => <div key={user.id}>
                <img src={user.photos.small}/>
                <NavLink to={'/profile/' + user.id} > {user.name} </NavLink>
                {user.followed
                    ? <button onClick={() => props.startUnfollow}> unfollow </button>
                    : <button onClick={() => props.startFollow}> follow </button>}
            </div>)}
        </div>
    );
}

export default Users