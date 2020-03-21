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

const AccountDisplayPage = ({ onEdit, firstName, lastName, email, mainAddress, subAddress, city, state, zipCode }) => (
    <>
        <Container>
            <Row>
                <h2 color='black' className='col-md-10'>Profile Info</h2>
                <Button className="btn btn-primary" color="primary"
                    onClick={onEdit}>
                    Edit
            </Button>
            </Row>
            <Row>
                <FormGroup className='col-md-6'>
                    <Label for="firstName"><b>First Name:</b></Label>&nbsp;&nbsp;
                <Col>
                    {firstName}
                </Col>
                </FormGroup>
                <FormGroup className='col-md-6'>
                    <Label readOnly for="LastName"><b>Last Name:</b></Label>
                <Col>
                    {lastName}
                </Col>
                </FormGroup>
            </Row>
            <FormGroup>
                <Label for="inputEmail4"><b>Email:</b></Label>
            <Col>
                {email}
            </Col>
            </FormGroup>
            <FormGroup>
                <Label for="inputAddress"><b>Address</b></Label>
            <Col>
                {mainAddress}
            </Col>
            </FormGroup>
            <FormGroup>
                <Label for="inputAddress2"><b>Address 2</b></Label>
                <Col>
                    {subAddress}
                </Col>
            </FormGroup>
            <Row>
                <FormGroup className="col-md-6">
                    <Label for="inputCity"><b>City</b></Label>
                    <Col>
                        {city}
                </Col>
                </FormGroup>
                <FormGroup className="col-md-4">
                    <Label for="inputState"><b>State</b></Label>
                    <Col>
                        {state}
                </Col>
                </FormGroup>
                <FormGroup className="col-md-2">
                    <Label for="inputZip"><b>Zip</b></Label>
                    <Col>
                        {zipCode}
                </Col>
                </FormGroup>
            </Row>
        </Container>
    </>
);
export default AccountDisplayPage;