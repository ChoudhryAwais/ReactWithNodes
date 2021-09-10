import React, { useState } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

export function Form1(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="mt-4 bg-light  border rounded  p-5"
    >
      <p className="mb-5 border rounded bg-dark text-white h5"> Profile </p>
      <Form.Row className="text-left">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className="h6">First name :</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="First name"
            value={props.value.profile.name}
            onChange={props.onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className="h6">Last name :</Form.Label>
          <Form.Control
            name="fathername"
            type="text"
            placeholder="Last name"
            value={props.value.profile.fathername}
            onChange={props.onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row className="text-left">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label className="h6">Date of birth :</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              value={props.value.profile.dob}
              onChange={props.onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row className="text-left h6">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City : </Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required
            name="city"
            value={props.value.profile.city}
            onChange={props.onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State :</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            required
            name="states"
            value={props.value.profile.states}
            onChange={props.onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            required
            name="zip"
            value={props.value.profile.zip}
            onChange={props.onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button type="submit" className="btn btn-success">
        Submit
      </Button>
    </Form>
  );
}
