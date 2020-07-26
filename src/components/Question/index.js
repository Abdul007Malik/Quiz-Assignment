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
import { isCorrect as isCorrectScore } from '../../utils/score';
import VideoPlayer from '../UI/video';

class Question extends React.Component {
    static propTypes = {
        question: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isLast: PropTypes.bool
    }

    state = {
        answer: null,
        submitted: false
    }
    onSubmit = () => {
        if (!this.state.answer && !window.confirm("Do you want to skip this question"))
            return;
        this.setState({ submitted: true })
        setTimeout(() => this.props.onSubmit({ answer: this.state.answer, questionId: this.props.id }), 2000);
    }

    onChange = (answer) => {
        this.setState({ answer })
    }

    getExtra = (type, question) => {
        switch (type) {
            case "image":
                return <img height="100px" width="100px" src={question.imagePath} alt="Not available" />
            case "video":
                return <VideoPlayer
                    autoplay={true} controls={true}
                    sources={{ src: question.videoPath, type: 'video/mp4' }} />
            default:
                return null;
        }
    }
    render() {
        const { id, question, options, type, isLast, correct_answer, questionType, ...rest } = this.props,
            { answer } = this.state,
            correctAnswerInText = typeof correct_answer === "string" ? correct_answer : correct_answer.join(", ")
        return (
            <Container className={'item'}>
                <h3>{`Question ${id}) ${question}`} </h3>
                {this.state.submitted && answer != null &&
                    (isCorrectScore(answer, correct_answer) ?
                        <p className="text-success">Correct Answer</p>
                        : <><p className="text-danger">Incorrect Answer</p>
                            <p>Correct Answer is {correctAnswerInText}</p></>)}
                {this.getExtra(questionType, rest)}
                <Options disabled={this.state.submitted} id={id} type={type} options={options} onChange={this.onChange} />
                <Button disabled={this.state.submitted} onClick={this.onSubmit} >{isLast ? "Submit Quiz" : "Next Question"}</Button>
            </Container>)
    }
}

export default Question