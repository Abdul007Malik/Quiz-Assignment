import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../../components/Question';
import { fetchQuestions } from '../../store/actions/questions';
import { addScore } from '../../store/actions/report';
// import question from '../../store/reducers/question';
// import Spinner from '../../components/UI/Spinner/Spinner';
import PropTypes from 'prop-types'
import { Container, ProgressBar, Spinner } from 'react-bootstrap';
class QuestionContainer extends Component {

    static propTypes = {
        addScore: PropTypes.func.isRequired,
        current: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.props.onFetchQuestions();
    }

    // timerStart = () => {
    //     set
    // }

    // componentWillUnmount(){

    // }
    parseQuestion = (question) => {
        return question && { ...question }
    }
    onSubmit = question => answer => {
        console.log(answer)
        if (answer?.answer)
            this.props.addScore(answer, 1);
        else if (!window.confirm("Do you want to skip this question"))
            return;
        else
            this.props.addScore(null, 0);
    }
    render() {
        const questions = this.props.questions, questionIndex = questions.findIndex(ques => ques.id === this.props.current),
            question = this.parseQuestion(this.props.questions[questionIndex]),
            remains = questions.length - questionIndex, completedPercent = (questionIndex) * 100 / questions.length
        if (this.props.loading)
            return <Spinner animation="border" variant="warning" />
        return (
            <Container className={'questions grid col-sm-8 shadow p-3 mb-5 bg-white rounded'}>
                <ProgressBar variant="success" now={completedPercent} />
                {question ?
                    <Question key={question.id} isLast={remains === 1} {...question} onSubmit={this.onSubmit(question)} /> :
                    "No question available"}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { question = {} } = state
    return {
        questions: question.questions,
        loading: question.loading,
        current: question.current
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestions: () => dispatch(fetchQuestions()),
        addScore: (answer, score) => dispatch(addScore(answer, score))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);