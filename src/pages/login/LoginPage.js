import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { compose } from 'recompose';
import { SignUpLink } from '../signup/SignUp';
import { FirebaseContext, withFirebase } from '../../firebase';

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import * as ROUTES from '../../constants/routes';
import SVLogo from 'assets/img/sv_logo.jpg';

const LogInPage = () => {
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
    <div>
      <LogInForm />
      {/* <SignUpLink /> */}
    </div>
  )
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

// core components

class LogInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      emailFocus: false,
      passwordFocus: false,
      errorAlert: false,
      error: null,
      ...INITIAL_STATE
    }
  }

  onSubmit = async event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
        console.log(this.state);
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  render() {
    const { emailFocus, passwordFocus, email, password, error, errorAlert } = this.state;
    const isInvalid = password === '' || email === '';
    console.log(isInvalid);
    return (
      <>
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="" onSubmit={this.onSubmit}>
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          className='login-logo'
                          alt="..."
                          src={SVLogo}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Email...'
                          name='email'
                          type='text'
                          onChange={this.onChange}
                          onFocus={() => this.setState({ emailFocus: true })}
                          onBlur={() => this.setState({ emailFocus: false })}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (passwordFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password..."
                          name='password'
                          type="password"
                          onChange={this.onChange}
                          onFocus={() => this.setState({ passwordFocus: true })}
                          onBlur={() => this.setState({ passwordFocus: false })}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-round"
                        id='get-started'
                        disabled={isInvalid}
                        type='submit'
                        color="info"
                        onClick={this.onSubmit}
                        size="lg"
                      >
                        Get Started
                      </Button>
                      <div className="pull-left">
                        <h7>
                          <a
                            className="link"
                            href={ROUTES.SIGN_UP}
                          >
                            Create Account
                        </a>
                        </h7>
                      </div>
                      <div className="pull-right">
                        <h7>
                          <a
                            className="link"
                            color='black'
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Need Help?
                        </a>
                        </h7>
                      </div>
                    </CardFooter>
                    {error &&
                      (<Alert color="danger" isOpen={!errorAlert}>
                        <Container>
                          <div className="alert-icon">
                            <i className="now-ui-icons objects_support-17"></i>
                          </div>
                          <strong>Oh snap!</strong> Change a few things up and try submitting
                          again.
                        <button
                            type="button"
                            className="close"
                            onClick={() => this.setState({ errorAlert: true })}
                          >
                            <span aria-hidden="true">
                              <i className="now-ui-icons ui-1_simple-remove"></i>
                            </span>
                          </button>
                        </Container>
                      </Alert>)}
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
const LogInForm = compose(
  withRouter,
  withFirebase
)(LogInFormBase);

export default LogInPage;

export { LogInForm };
