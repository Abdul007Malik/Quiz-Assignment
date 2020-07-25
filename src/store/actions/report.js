import * as actionTypes from "./actionTypes"
import { nextQuestion } from "./questions"
export const addScore = (answer, score) => (dispatch) => {
    dispatch({ type: actionTypes.SCORE_ADD, answer, score });
    dispatch(nextQuestion());
}