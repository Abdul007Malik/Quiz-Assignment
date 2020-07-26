import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { calculateScore } from '../../utils/score'
import { Container } from 'react-bootstrap';
import Report from '../../components/Report/index';

const ReportContainer = props => {
    const { answers, questions, user } = props,
        totalQuestions = questions?.length || 0, totalAnswers = answers?.length || 0;
    let score = calculateScore(questions, answers)
    return (
        <Container className="report">
            <Report score={score} user={user} totalQuestions={totalQuestions} totalAnswers={totalAnswers} />
        </Container>
    );
}

ReportContainer.propTypes = {
    answers: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired
}
const mapStoP = (state) => {
    const { common: { current }, report: { answers, score }, question: { questions } } = state
    return { answers, score, questions, user: current }
}
export default connect(mapStoP)(ReportContainer);