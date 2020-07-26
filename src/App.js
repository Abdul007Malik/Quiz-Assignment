/**
 * @author Abdul Malik
 * @email abdul007malik@hotmail.com
 * @create date 2020-07-25 11:41
 * @modify date 2020-07-25 11:41
 * @desc [description]
 */
import React from 'react';
import { Route, withRouter } from "react-router";
// import logo from './logo.svg';
import './App.css';
// import { STAGES } from './constants'
import { connect } from 'react-redux'
import Questions from './containers/Questions/index'
import UserForm from './containers/User/index'
import { STAGES } from './constants';
import Report from './containers/Report';
import PrivateRoute from './hoc/PrivateRoute';

class QuizApp extends React.Component {

  componentDidMount() {
  }

  componentDidUpdate(prev) {
    if (prev.currentStage !== this.props.currentStage) {
      if (this.props.currentStage === STAGES.USER_REG)
        this.props.history.push('/');
      if (this.props.currentStage === STAGES.QUESTION_STAGE)
        this.props.history.push('/question');
      if (this.props.currentStage === STAGES.REPORT_STAGE)
        this.props.history.push('/report');
      if (this.props.currentStage === STAGES.INVALID_STATE)
        this.props.history.push('/error');
    }
  }

  getPageTile(stage) {
    switch (stage) {
      case 1:
        return "Questions";
      case 2:
        return "Report";
      default:
        return "Register";
    }
  }

  render() {
    return (
      <div className="App" >
        {/* <h1>{this.getPageTile(this.props.currentStage)}</h1> */}
        <Route exact path={`/`} component={UserForm} />
        <PrivateRoute path={`/question`} component={Questions} />
        <PrivateRoute path={`/report`} component={Report} />
      </div>
    )
  };
}
const mapStoP = (state) => {
  const { stage } = state
  return { currentStage: stage.current }
}

export default connect(mapStoP)(withRouter(QuizApp));
