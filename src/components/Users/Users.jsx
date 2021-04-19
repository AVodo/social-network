import React from "react";


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: "Andrew",
                status: "boss",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 2,
                followed: false,
                fullName: "Sasha",
                status: "looser",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                followed: true,
                fullName: "Katya",
                status: "pussy power",
                location: {city: "Kyiv", country: "Ukraine"}
            }
        ]);
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                {user.fullName}
                {user.followed
                    ? <button onClick={() => props.startUnfollow(user.id)}>unfollow</button>
                    : <button onClick={() => props.startFollow(user.id)}>follow</button>}
            </div>)}
        </div>
    );
}

export default Users;