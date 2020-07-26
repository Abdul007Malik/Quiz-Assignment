import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Container, Row, Form } from 'react-bootstrap'
import './User.css'

class UserForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    state = { name: '' }

    render() {
        const { name } = this.state
        return (
            <Container className={'user-register'}>
                <div className="auth-wrapper">
                    <div className="shadow p-3 mb-5 bg-white rounded auth-inner">
                        <Form className="" >
                            <h3>Register</h3>
                            <div className={"user-form"}>
                                <div className="form-group">
                                    <input name="user" value={name} className="form-control" placeholder="Your Name" onChange={(event) => this.setState({ name: event.target.value })} />
                                </div>
                                <Button className="btn btn-primary btn-block" onClick={() => this.props.onSubmit({ name })}>Register</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default UserForm;