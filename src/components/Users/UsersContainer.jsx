import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.page, this.props.count).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged(page) {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
            usersAPI.getUsers(page, this.props.count).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                   count={this.props.count}
                   page={this.props.page}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged.bind(this)}
                   startUnfollow={this.props.unfollow}
                   startFollow={this.props.follow}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, setTotalCount,setCurrentPage,setUsers,toggleIsFetching,unfollow})(UsersContainer);