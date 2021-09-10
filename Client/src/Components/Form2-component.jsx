import React,{useState} from 'react';
import { Form ,Button, Col, InputGroup} from 'react-bootstrap';


export function Form2(props) {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    
    const discipline = ["Matric","Intermediate","Bachelor","Masters"]
    const classes = ["Ninth","Tenth","First Year","Second Year","Third Year","Fourth Year","MCS"]
    const groups = ["Science","Arts","Pre-Medical","Pre-Engineering","Computer Science"]

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4 bg-light  border rounded  p-5">
         <p className= "mb-5 border rounded bg-dark text-white h5"> Academic </p>
        <Form.Row className="text-left">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className="h6">Discipline :</Form.Label>
                <Form.Control as="select" name= "discipline" onChange={props.onChange} required>
                    <option className="bg-secondary text-white" value="">{props.value.academic.discipline}</option>
                    {discipline.map(discipline =>
                        {
                            return <option value={discipline}>{discipline}</option>
                    })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label className="h6">Class :</Form.Label>
                <Form.Control as="select" name= "classes" onChange={props.onChange} required>
                    <option className="bg-secondary text-white" value="">{props.value.academic.classes}</option>
                    {classes.map(classes =>
                        {
                            return <option value={classes}>{classes}</option>
                    })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>

        <Form.Row className ="text-left">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label className="h6">Group :</Form.Label>
                <Form.Control as="select" name= "group" onChange={props.onChange} required>
                    <option className="bg-secondary text-white" value="">{props.value.academic.group}</option>
                    {groups.map(groups =>
                        {
                            return <option value={groups}>{groups}</option>
                    })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>


        
        
        <Button type="submit" className="btn btn-success">Submit</Button>
      </Form>
    );
  }
  
  
