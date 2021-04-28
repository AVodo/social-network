import React from "react";
import * as axios from "axios";
import style from "./Users.module.css"


class UsersCl extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}&total`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged(page) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let totalPages = Math.ceil(this.props.totalCount / this.props.count);
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => <span className={page === this.props.page && style.selectedPage}
                                             onClick={() => {
                                                 this.onPageChanged(page)
                                             }}>{page}</span>)}
                </div>
                {this.props.users.map(user => <div key={user.id}>
                    {user.name}
                    {user.followed
                        ? <button onClick={() => this.props.startUnfollow(user.id)}>unfollow</button>
                        : <button onClick={() => this.props.startFollow(user.id)}>follow</button>}
                </div>)}
            </div>
        );
    }

}

export default UsersCl;