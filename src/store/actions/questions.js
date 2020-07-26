import * as actionTypes from './actionTypes';
import axios from 'axios';
import { completeStage } from './stage';
import { STAGES } from '../../constants';

export const fetchQuestionsSuccess = (questions) => {
    return {
        type: actionTypes.QUESTIONS_FETCH_SUCCESS,
        questions: questions
    };
};

export const nextQuestion = () => (dispatch, getStore) => {
    const question = getStore().question, current = question.current,
        lastQuesIndex = question.questions.findIndex(q => q.id === current),
        questionId = question.questions[lastQuesIndex + 1]?.id
    if (lastQuesIndex !== -1) {
        // dispatch(completeStage(STAGES.QUESTION_STAGE));
        //if lastQuesIndex is last in the questions then complete question state
        if (lastQuesIndex === question.questions.length - 1) {
            dispatch({ type: actionTypes.QUESTIONS_POINTER_SET, current: null })
            dispatch(completeStage(STAGES.QUESTION_STAGE));
        } else
            dispatch({ type: actionTypes.QUESTIONS_POINTER_SET, current: questionId })
    } else console.trace("Invalid state:", lastQuesIndex, current, question.questions);
}

export const fetchQuestions = () => {
    return dispatch => {
        dispatch({ type: actionTypes.QUESTIONS_FETCH_START });
        axios.get('http://localhost:8000/questions')
            .then(res => {
                const fetchedQuestions = res.data.results.map((question, index) => ({ ...question, id: index + 1 }))
                dispatch(fetchQuestionsSuccess(fetchedQuestions));
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.QUESTIONS_FETCH_FAIL,
                    error: "Failed to fetch questions"
                });
            });
    };
};