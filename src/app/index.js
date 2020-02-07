import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withFirebase } from '../firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import withAuthentication from '../session/withAuthentication';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignUpPage from 'pages/signup/SignUp.js';
import Index from "views/Index.js";
import Home from 'pages/home/index.js';
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "pages/login/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

import * as ROUTES from '../constants/routes';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }
    componentWillUnmount() {
        this.listener();
    }
    render() {
        return (
            <Router>
                <IndexNavbar />
                <Switch>
                    <Switch>
                        <Route path={ROUTES.HOME} render={props => <Home {...props} />} />
                        <Route path='/index' render={props => <Index {...props} />} />
                        <Route path={ROUTES.INTRODUCTION} render={props => <Home {...props} />} />
                        <Route
                            path="/landing-page"
                            render={props => <LandingPage {...props} />}
                        />
                        <Route path="/profile-page"
                            render={props => <ProfilePage {...props} />}
                        />
                        <Route path={ROUTES.LOGIN} render={props => <LoginPage {...props} />} />
                        <Route path={ROUTES.SIGN_UP} render={props => <SignUpPage {...props} />} />
                        <Redirect to="/home" />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </Switch>
                <DarkFooter />
            </Router>
        );
    }
}
export default withAuthentication(App);