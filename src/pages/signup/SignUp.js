import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';
import { FirebaseContext, withFirebase } from '../../firebase';
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
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
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// core components

const SignUpPage = () => {
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
    <SignUpForm />
  )
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
      firstFocus: false,
      lastFocus: false,
      emailFocus: false,
      passwordOneFocus: false,
      passwordTwoFocus: false,
      error: null,
      ...INITIAL_STATE
    }
  }

  onSubmit = async event => {
    const { email, passwordOne } = this.state;
    const { firebase } = this.props;
    try {
      const authUser = await firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
      if (authUser) this.setState({ user: authUser, ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    } catch (error) {
      this.setState({ error });
    }
    console.log(this.state);
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
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
            minHeight: "700px"
          }}
        >
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="" onSubmit={this.onSubmit}>
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Sign Up
                  </CardTitle>
                    <div className="social-line">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First Name..."
                        name='firstName'
                        value={firstName}
                        type="text"
                        onChange={this.onChange}
                        onFocus={() => this.setState({ firstFocus: true })}
                        onBlur={() => this.setState({ firstFocus: false })}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Last Name..."
                        name='lastName'
                        value={lastName}
                        type="text"
                        onChange={this.onChange}
                        onFocus={() => this.setState({ lastFocus: true })}
                        onBlur={() => this.setState({ lastFocus: false })}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (this.state.emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        name='email'
                        value={email}
                        type="text"
                        onChange={this.onChange}
                        onFocus={() => this.setState({ emailFocus: true })}
                        onBlur={() => this.setState({ emailFocus: false })}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (this.state.passwordOneFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        name='passwordOne'
                        value={passwordOne}
                        type="password"
                        onChange={this.onChange}
                        onFocus={() => this.setState({ passwordOneFocus: true })}
                        onBlur={() => this.setState({ passwordOneFocus: false })}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        'no-border' + (this.state.passwordTwoFocus ? ' input-group-focus' : '')
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password..."
                        name='passwordTwo'
                        value={passwordTwo}
                        type="password"
                        onChange={this.onChange}
                        onFocus={() => this.setState({ passwordTwoFocus: true })}
                        onBlur={() => this.setState({ passwordTwoFocus: false })}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      type='submit'
                      disabled={isInvalid}
                      onClick={this.onSubmit}
                      size="lg"
                    >
                      Get Started
                  </Button>
                  </CardFooter>
                  {error &&
                    (<div class="alert alert-danger">
                      <button type="button" aria-hidden="true" class="close">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                      </button>
                      <span><b> Failure - </b> Sign Up Failed.</span>
                    </div>)}

                </Form>
              </Card>
            </Row>
            <div className="col text-center">
              <Button
                className="btn-round btn-white"
                color="default"
                to={ROUTES.LOGIN}

                size="lg"
                tag={Link}
              >
                View Login Page
            </Button>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const SignUpLink = () => { };
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
