import { STAGES } from "../../constants";

export const completeStage = (stage) => (dispatch) => {
    switch (stage) {
        case STAGES.USER_REG:
            dispatch({ type: 'STAGE_SET', stage: STAGES.QUESTION_STAGE })
            break;
        case STAGES.QUESTION_STAGE:
            dispatch({ type: 'STAGE_FINISH', stage: STAGES.REPORT_STAGE })
            break;
        default:
            dispatch({ type: 'STAGE_ERROR', error: "Sorry the page you are trying to access doesnot exist" })
            break;
    }
}