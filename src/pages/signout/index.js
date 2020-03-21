import React from 'react';
import { NavLink, NavItem } from "reactstrap";
import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';
const SignOutButton = ({ firebase }) => (
    <>
        <NavItem>
            <NavLink onClick={firebase.doSignOut}>
                <p>Sign Out</p>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.ACCOUNT}>
                <i className="now-ui-icons users_circle-08"></i>
                {/* <p>Account</p> */}
            </NavLink>
        </NavItem>
    </>
);
export default withFirebase(SignOutButton);