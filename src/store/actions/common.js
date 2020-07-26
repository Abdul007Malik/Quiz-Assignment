import axios from "axios";
import { completeStage } from './stage'
import * as actionTypes from './actionTypes'
import { STAGES } from "../../constants";

export const registerUser = (userData) => (dispatch) => {
    axios.post('http://localhost:8000/register', userData)
        .then(response => {
            dispatch({ type: actionTypes.USER_REGISTER, user: { ...userData } })
            dispatch(completeStage(STAGES.USER_REG));
        })
        .catch(error => {
            dispatch({ type: actionTypes.USER_REGISTER_FAIL, error: 'Failed to register. Please try again...' });
        });
}