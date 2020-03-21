
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';
import { FirebaseContext, withFirebase } from '../../firebase';
import { AuthUserContext } from '../../session';
import AccountDisplayPage from './AccountDisplayPage';
import AccountEditPage from './AccountEditPage';
import withAuthorization from '../../session/withAuthorization';
import firebase from '../../firebase';

// reactstrap components
import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    select,
    h2,
    FormGroup,
    Label,
    Form,
    Input,
    Col,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row
} from "reactstrap";

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    isEditing: false,
    error: null,
};

// core components

const AccountPage = () => {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <AuthUserContext.Consumer>
            {authUser => (authUser ? <AccountForm authUser={authUser}/> : null)}
        </AuthUserContext.Consumer>
    )
};

class AccountPageBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: this.props.authUser,
            error: null,
            ...INITIAL_STATE
        }
    }

    componentDidMount = async () => {
        const user = await this.props.firebase.user(this.state.authUser.uid).once('value');
        console.log('db', user.val());
        this.setState({ ...user.val() })
    }

    onEdit = () => {
        this.setState({ isEditing: true });
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            isEditing,
            mainAddress,
            subAddress,
            city,
            state,
            zipCode,
            authUser
        } = this.state;
        console.log(this.state);
        const isInvalid =
            email === '' ||
            firstName === '' ||
            lastName === '';
        return (
            <>
                <div
                    className="section section-signup"
                    style={{
                        backgroundImage: "url(" + require("assets/img/bg8.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        minHeight: "800px"
                    }}
                >

                    <Container id='account-container'>
                        {isEditing
                            ? <AccountEditPage 
                                authUser={this.props.authUser} 
                                firstName={firstName} 
                                lastName={lastName} 
                                email={email}
                                mainAddress={mainAddress}
                                
                                /> :
                            <AccountDisplayPage {...this.props} authUser={this.props.authUser} onEdit={this.onEdit} firstName={firstName} lastName={lastName} email={email} />
                        }
                    </Container>
                </div>
            </>
        );
    }
}

const AccountLink = () => { };
const AccountForm = compose(
    withRouter,
    withFirebase,
)(AccountPageBase);

export { AccountForm, AccountLink };

const mapStateToProps = async (state) => {
    console.log('dddeeeww', state.authUser);
    // const user = await firebase.user(state.authUser.uid).once('value');
    // console.log(user);
    return {
        // user: user
    }
}

const condition = authUser => !!authUser;
export default connect(mapStateToProps)(withAuthorization(condition)(AccountPage));