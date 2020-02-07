import React from 'react';
import { NavLink, NavItem } from "reactstrap";
import { withFirebase } from '../../firebase';
const SignOutButton = ({ firebase }) => (
    <NavItem>
        <NavLink onClick={firebase.doSignOut}>
            <p>Sign Out</p>
        </NavLink>
    </NavItem>
);
export default withFirebase(SignOutButton);