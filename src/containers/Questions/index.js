import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../../components/Question';
import { fetchQuestions } from '../../store/actions/questions';
import { addScore } from '../../store/actions/report';
// import question from '../../store/reducers/question';
// import Spinner from '../../components/UI/Spinner/Spinner';
import PropTypes from 'prop-types'
class Questions extends Component {

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
        return {
            ...question,
        }
    }
    onSubmit = question => answer => {
        this.props.addScore(answer, 1);
    }
    render() {
        // let question = <Spinner />;
        let question = this.parseQuestion(this.props.questions.find(ques => ques.id === this.props.current));
        return (
            <div className={'questions grid'}>
                {question ?
                    <Question key={question.id} {...question} onSubmit={this.onSubmit(question)} /> :
                    "No question available"}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);