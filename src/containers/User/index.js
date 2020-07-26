import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from "../../store/actions/common";
import UserForm from "../../components/User/UserForm";
class UserContainer extends Component {

    onSubmit = (userData) => {
        if (!userData || !userData.name) {
            alert("Name is required");
            return;
        }
        // console.log(typeof this.props.registerUser, this.props.registerUser,userData)
        this.props.registerUser(userData);
    }

    render() {
        return <UserForm onSubmit={this.onSubmit} />
    }
}

const mapStoD = dispatch => {
    return { registerUser: (data) => dispatch(registerUser(data)) }
}
export default connect(null, mapStoD)(UserContainer);