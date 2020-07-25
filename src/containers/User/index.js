import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from "../../store/actions/common";
import UserForm from "../../components/UserForm";
class User extends Component {

    onSubmit = (userData) => {
        // console.log(typeof this.props.registerUser, this.props.registerUser,userData)
        this.props.registerUser(userData);
    }

    render() {
        console.log(this.props)
        return (
            <div className={'questions grid'}>
                <UserForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStoD = dispatch => {
    return { registerUser: (data) => dispatch(registerUser(data)) }
}
export default connect(null, mapStoD)(User);