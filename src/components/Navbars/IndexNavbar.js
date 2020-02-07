import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from '../../session';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import SignOutButton from '../../pages/signout/index.js';
import SVLogo from 'assets/img/sv_logo.jpg';

const NavBarPartial = ({authUser}) => {
  console.log(authUser);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href='/home'
              target="_blank"
              id="navbar-brand"
            >
              <img
                alt="SVLogo"
                className="logo"
                src={SVLogo}
              ></img>&nbsp;
              SV Digital
        </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
        </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#about"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>About</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    Introduction
                  </DropdownItem>
                  <DropdownItem
                    to="/history"
                    target="_blank"
                  >
                    History
                  </DropdownItem>
                  <DropdownItem
                    to="/history"
                    target="_blank"
                  >
                    Organization
                  </DropdownItem>
                  <DropdownItem
                    to="/history"
                    target="_blank"
                  >
                    Products Category in Sales
                  </DropdownItem>
                  <DropdownItem
                    to="/history"
                    target="_blank"
                  >
                    Direction
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Sound and Vibration Analyzer
                  </DropdownItem>
                  <DropdownItem
                    to="/index"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Sensor
                  </DropdownItem>
                  <DropdownItem
                    to="/index"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Data Aquisition
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/research">
                  <p>Research</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Supports</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Product Inquieries
                  </DropdownItem>
                  <DropdownItem
                    to="/index"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Data
                  </DropdownItem>
                  <DropdownItem
                    to="/index"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    A/S Request
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/research">
                  <p>News</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/research">
                  <p>Distributors</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/research">
                  <p>Contact</p>
                </NavLink>
              </NavItem>
              {authUser ? <SignOutButton /> : (
                <>
                  <NavItem>
                    <NavLink href="/login">
                      <p>Log In</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup">
                      <p>Sign Up</p>
                    </NavLink>
                  </NavItem>
                </>)}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>)
};

const IndexNavbar = () => {
  // console.log('authUSer', authUser);
  return (
    <AuthUserContext.Consumer>
      {authUser => (<NavBarPartial authUser={authUser} />)}
    </AuthUserContext.Consumer>
  );
}

export default IndexNavbar;
