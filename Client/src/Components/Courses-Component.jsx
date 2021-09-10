import React,{useState} from 'react'; 
import {Button , Modal , Form , Col, InputGroup} from 'react-bootstrap';
import {C1} from './C1-component'
import { C2 } from './C2-component';
import { C3 } from './C3-component';
import { SideNav } from './SideNav-Component';



const propertyofcomponet =['C2','C1','C3'];




export class Courses extends React.Component{
    constructor(){
        super ();
        this.state ={
            show : false
        }
    }

    handleClick =()=>{
        this.setState({
            show : !this.state.show
        },()=>{ console.log(this.state.show)})
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-3 col-md-4">
                        <SideNav/>
                    </div>
                    <div className="col-xl-9 col-md-8">
                        <Modal show={this.state.show} onHide={this.handleClick}  backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Register Yourself Now</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form noValidate className="   p-5">
                                    <Form.Row className="text-left">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label className="h6">First name :</Form.Label>
                                        <Form.Control
                                        required
                                        type="text"
                                        name = "name"
                                        placeholder="First name"
                                        
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label className="h6">Last name :</Form.Label>
                                        <Form.Control
                                        required
                                        name = "fathername"
                                        type="text"
                                        placeholder="Last name"
                                        
                                        
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    </Form.Row>

                                    <Form.Row className ="text-left">
                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                        <Form.Label className="h6">Date of birth :</Form.Label>
                                        <InputGroup hasValidation>
                                        <Form.Control
                                            type="date"
                                            name = "dob"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            
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
                                        name ="city"
                                        
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
                                        name ="states"
                                        
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
                                        name ="zip"
                                        
                                        />
                                        <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    </Form.Row>
                                    
                                    <Button type="submit" className="btn btn-success">Submit</Button>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClick}>Close</Button>
                                <Button variant="primary" onClick={this.handleClick}>Apply Now</Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="row text-center bg-warning">
                            <div className="col-xl-12 hometop text-white">Courses Page</div>
                        </div>
                        <div className="row">
                        {
                            propertyofcomponet.map(demo =>{
                                return(
                                   demo==="C1" ? <C1 onClick={this.handleClick}/> : demo==="C2" ? <C2 onClick={this.handleClick}/> : demo==="C3" ? <C3 onClick={this.handleClick}/>: <div></div>
                                )
                            })
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
            
        )
    }
    
}