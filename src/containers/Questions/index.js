import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import Question from '../../components/Question';
import { fetchQuestions } from '../../store/actions/questions';
import { addScore } from '../../store/actions/report';
// import question from '../../store/reducers/question';
// import Spinner from '../../components/UI/Spinner/Spinner';
import PropTypes from 'prop-types'
import { Container, ProgressBar, Spinner } from 'react-bootstrap';
import { completeStage } from '../../store/actions/stage';
import { STAGES } from '../../constants';
class QuestionContainer extends Component {

    static propTypes = {
        addScore: PropTypes.func.isRequired,
        current: PropTypes.number
    }
    // today = moment();
    state = { countdown: moment.duration(this.props.duration, 'seconds') }
    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.timer();
        }, 1000);

        this.props.onFetchQuestions();
    }

    timer = () => {
        let countdown = this.state.countdown
        if (countdown.asSeconds() <= 0) {
            this.props.completeStage()
            return;
        }
        this.setState(prevState => ({
            countdown: moment.duration(prevState.countdown.asSeconds() - 1, 'seconds')
        }))
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSubmit = question => answer => {
        if (answer?.answer)
            this.props.addScore(answer, 1);
        else
            this.props.addScore(null, 0);
    }
    render() {
        const questions = this.props.questions, questionIndex = questions.findIndex(ques => ques.id === this.props.current), question = this.props.questions[questionIndex],
            remains = questions.length - questionIndex, completedPercent = (questionIndex) * 100 / questions.length, countdown = this.state.countdown;

        const timerClasses = ['timer']
        if (countdown.asSeconds() < 10)
            timerClasses.push('blink text-danger')

        return (
            <Container className={'questions grid col-sm-8 shadow p-3 mb-5 bg-white rounded'}>
                <div className={timerClasses.join(" ")}>
                    Time :: {countdown.hours()}:{countdown.minutes()}:{countdown.seconds()}
                </div>
                {this.props.loading ? <Spinner animation="border" variant="warning" /> :
                    <>
                        <ProgressBar variant="success" now={completedPercent} />
                        {question ?
                            <Question key={question.id} isLast={remains === 1} {...question} options={question.options} onSubmit={this.onSubmit(question)} />
                            : "No question available"}
                    </>}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { question = {} } = state
    return {
        questions: question.questions,
        loading: question.loading,
        current: question.current,
        duration: question.duration
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestions: () => dispatch(fetchQuestions()),
        addScore: (answer, score) => dispatch(addScore(answer, score)),
        completeStage: () => dispatch(completeStage(STAGES.QUESTION_STAGE))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);