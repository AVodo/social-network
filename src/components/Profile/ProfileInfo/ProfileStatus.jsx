import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    stopEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.stopEditMode} value={this.state.status}/>
            }
        </div>
    }
}

export default ProfileStatus;