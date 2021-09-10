import React from 'react';
import {Dropdown} from 'react-bootstrap';

export const Dropdowns =(props)=>{
    return (
        <Dropdown className="mb-4">
        <Dropdown.Toggle variant="info" >
            Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item>
                <i class="fas fa-user-alt "></i>
                <button className="btn" onClick={props.isSelected} value="Profile">Profile</button>
            </Dropdown.Item>
            <Dropdown.Item>
                <i class="fas fa-school "></i>
                <button className="btn" onClick={props.isSelected} value="Academic">Academic</button>
            </Dropdown.Item>
            <Dropdown.Item>
                <i class="fas fa-chalkboard-teacher"></i>
                <button className="btn" onClick={props.isSelected} value="Teacher">Teacher</button>
            </Dropdown.Item>
            
        </Dropdown.Menu>
        </Dropdown>
    )
}