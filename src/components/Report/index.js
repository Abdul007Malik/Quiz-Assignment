import React from 'react'
import { Row } from 'react-bootstrap'
import './Report.css'
export default (props) => {
    return <Row className="shadow p-3 mb-5 bg-white rounded">
        <label>
            Congratulation {props.user?.name}, You have scored {props.score} out of {props.totalQuestions} (Attempted: {props.totalAnswers})
        </label>
    </Row>
}