import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.count);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.count);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                   count={this.props.count}
                   page={this.props.page}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
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
    {follow, unfollow, getUsers})(UsersContainer);