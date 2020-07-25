import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';
import { STAGES } from "../../constants.js";
import question from "./question";

const stage = (state = { current: STAGES.USER_REG, finish: false }, action) => {
    switch (action.type) {
        case actionTypes.STAGE_SET:
            return Object.assign({}, state, { current: action.stage });
        case actionTypes.STAGE_FINISH:
            return Object.assign({}, state, { current: STAGES.REPORT_STAGE, finish: true });
        case actionTypes.STAGE_ERROR:
            return Object.assign({}, state, { current: STAGES.INVALID_STATE, error: action.error });
        default:
            return state;
    }
};


const common = (state = { current: null }, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTER:
            return Object.assign({}, state, { current: action.user });
        case actionTypes.USER_LOGOUT:
            return Object.assign({}, state, { current: null });
        default:
            return state;
    }
}

const report = (state = { score: null, answers: [] }, action) => {
    switch (action.type) {
        case actionTypes.SCORE_ADD:
            return Object.assign({}, state, {
                score: state.score + action.score,
                answers: state.answers.concat(action.answer)
            });
        case actionTypes.SCORE_RESET:
            return Object.assign({}, state, { score: null, answers: [] });
        default:
            return state;
    }
}

export default combineReducers({
    stage, question, common, report
})