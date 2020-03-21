
import React from "react";

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

const AccountEditPage = ({ firstName, lastName, email, mainAddress, subAddress, city, state, zipCode }) => (
    <>
        <h2 color='black'>Account Edit Page</h2>
        <Form className='cod-md-12'>
            <Row>
                <FormGroup className='col-md-6'>
                    <Label for="inputEmail4">First Name</Label>
                    <Input className='form-control' type="name" id="inputEmail4" placeholder="Email" value={firstName} />
                </FormGroup>
                <FormGroup className='col-md-6'>
                    <Label readOnly for="inputPassword4">Last Name</Label>
                    <Input type="name" className="form-control" id="inputPassword4" placeholder="Password" value={lastName} />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup className='col-md-6'>
                    <Label for="inputEmail4">Email</Label>
                    <Input className='form-control' type="email" id="inputEmail4" placeholder="Email" value={email} />
                </FormGroup>
            </Row>
            <FormGroup>
                <Label for="inputAddress">Address</Label>
                <Input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="inputAddress2">Address 2</Label>
                <Input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </FormGroup>
            <Row>
                <FormGroup className="col-md-6">
                    <Label for="inputCity">City</Label>
                    <Input type="text" className="form-control" id="inputCity" />
                </FormGroup>
                <FormGroup className="col-md-4">
                    <Label for="inputState">State</Label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </FormGroup>
                <FormGroup className="col-md-2">
                    <Label for="inputZip">Zip</Label>
                    <Input type="text" className="form-control" id="inputZip" />
                </FormGroup>
            </Row>
            <FormGroup>
                <div className="form-check">
                    <Label className="form-check-label">
                        <Input className="form-check-input" type="checkbox" /> Check me out
                            <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </div>
            </FormGroup>
            <Button type="submit" className="btn btn-primary">Submit</Button>
        </Form>
    </>
);

export default AccountEditPage;