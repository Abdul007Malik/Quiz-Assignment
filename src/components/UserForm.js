import React from 'react'
import PropTypes from 'prop-types';

class UserForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    state = { name: '' }

    render() {
        const { name } = this.state
        return (
            <div className={"user-form"}>
                <input name="user" value={name} onChange={(event) => this.setState({ name: event.target.value })} />
                <input type="button" value="Register" onClick={() => this.props.onSubmit({ name })} />
            </div>
        );
    }
}

export default UserForm;