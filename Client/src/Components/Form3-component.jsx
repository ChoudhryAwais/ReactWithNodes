import React,{useState} from 'react';
import { Form ,Button, Col, InputGroup} from 'react-bootstrap';


export function Form3(props) {
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
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4 bg-light  border rounded  p-5">
        <p className= "mb-5 border rounded bg-dark text-white h5"> Teachers </p>
        <Form.Row className="text-left">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className="h6">Teacher name :</Form.Label>
            <Form.Control
              required
              type="text"
              name = "teachername"
              placeholder="First name"
              value = {props.value.teacher.teachername}
              onChange ={props.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Form.Row>
        <Form.Row className="text-left">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label className="h6">Timings :</Form.Label>
                <Form.Control
                required
                name = "timing"
                type="time"
              
                
                value = {props.value.teacher.timing}
                onChange ={props.onChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>

       
        
        <Button type="submit" className="btn btn-success">Submit</Button>
      </Form>
    );
  }
  
  
