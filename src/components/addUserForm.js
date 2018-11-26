import React from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

import { _hasMinLength, _hasLength, _hasMaxLength } from '../config/form-validation';

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} sm={2}>{label}</Col>
    <Col sm={10}>
      <FormControl {...props} valida />
    </Col>
  </FormGroup>
);

const addUserForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <FieldGroup
      name="firstName"
      type="text"
      label="First Name"
      placeholder="First Name"
      // value={this.state.firstName}
      // onChange={(e) => { this.handleChange(e, 'firstName') }}
      validation={[]}
    />
    <FieldGroup
      name="lastName"
      type="text"
      label="Last Name"
      placeholder="Last Name"
    // value={this.state.lastName}
    // onChange={(e) => { this.handleChange(e, 'lastName') }}
    />
    <FieldGroup
      name="address"
      type="text"
      label="Address"
      placeholder="Address"
    // value={this.state.address}
    // onChange={(e) => { this.handleChange(e, 'address') }}
    />
    <FieldGroup
      name="company"
      type="text"
      label="Company"
      placeholder="Company"
    // value={this.state.company}
    // onChange={(e) => { this.handleChange(e, 'company') }}
    />
    <FieldGroup
      name="telephoneNumber"
      type="text"
      label="Telephone Number"
      placeholder="Telephone Number"
    // value={this.state.telephoneNumber}
    // onChange={(e) => { this.handleChange(e, 'telephoneNumber') }}
    />
    <FieldGroup
      name="dob"
      type="text"
      label="DoB"
      placeholder="DoB"
    // value={this.state.dob}
    // onChange={(e) => { this.handleChange(e, 'dob') }}
    />

    <Button bsStyle="primary" type="submit">Submit</Button>
  </Form>
);

export default addUserForm;
