import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    return props.user != null ?
        (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/" />);
};
export default connect((state) => ({ user: state.common?.current }))(PrivateRoute);