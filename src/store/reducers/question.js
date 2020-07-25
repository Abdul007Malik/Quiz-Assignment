import * as actionTypes from '../actions/actionTypes';

const initialState = { questions: [], loading: false, current: 1 };

const question = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.QUESTIONS_FETCH_START:
            return Object.assign({}, state, { loading: true });
        case actionTypes.QUESTIONS_FETCH_SUCCESS:
            return Object.assign({}, state, { questions: action.questions, loading: false });
        case actionTypes.QUESTIONS_FETCH_FAIL:
            return Object.assign({}, state, { loading: false, error: action.error });
        case actionTypes.QUESTIONS_POINTER_SET:
            return Object.assign({}, state, { current: action.current })
        default: return state;
    }
};

export default question;