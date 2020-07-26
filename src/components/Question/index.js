/**
 * @author Abdul Malik
 * @email abdul007malik@hotmail.com
 * @create date 2020-07-25 12:32
 * @modify date 2020-07-25 12:32
 * @desc [description]
 */
import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
import { Container, Button } from 'react-bootstrap'
import './Question.css';
class Question extends React.Component {
    static propTypes = {
        question: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isLast: PropTypes.bool
    }

    state = {
        answer: null
    }
    onSubmit = () => {
        this.props.onSubmit({ answer: this.state.answer, questionId: this.props.id });
    }

    onChange = (answer) => {
        this.setState({ answer })
    }
    render() {
        const { id, question, options, type, isLast } = this.props;//, { answer } = this.state
        return (
            <Container className={'item'}>
                <h3>{`Question ${id}) ${question}`} </h3>
                <Options id={id} type={type} options={options} onChange={this.onChange} />
                <Button onClick={this.onSubmit} >{isLast ? "Submit Quiz" : "Next Question"}</Button>
            </Container>)
    }
}

export default Question