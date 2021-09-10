import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StudentNav } from "./StudentNav-Component";
import { StudentNavData } from "./StudentNavData-Component";
import { Form1 } from "./Form1-component";
import { Form2 } from "./Form2-component";
import { Form3 } from "./Form3-component";
import { Dropdowns } from "./Dropdwon-component";

export class Student extends React.Component {
  constructor() {
    super();

    this.academic = {
      discipline: "Select your Discipline",
      classes: "Select your Class",
      group: "Select your Group",
    };
    this.profile = {
      name: "",
      fathername: "",
      cnic: "",
      address: "",
      dob: "",
      city: "",
      states: "",
      zip: "",
    };

    this.teacher = {
      teachername: "",
      timing: "",
    };

    this.state = {
      selected: "Profile",
      modalselected: "Profile",
      text: "",
      navtab: ["Profile", "Academic", "Teacher"],
      academic: this.academic,
      profile: this.profile,
      teacher: this.teacher,
      valitionpro: "disabled",
      show: false,
    };
  }

  handleClick = () => {
    this.setState(
      {
        show: !this.state.show,
      },
      () => {
        console.log(this.state.show);
      }
    );
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      academic: {
        ...this.state.academic,
        [name]: value,
      },
      profile: {
        ...this.state.profile,
        [name]: value,
      },
      teacher: {
        ...this.state.profile,
        [name]: value,
      },
    });
  };
  isSelected = (e) => {
    this.setState(
      {
        selected: e.target.value,
      },
      () => console.log(e.target.value)
    );
  };
  isSelectedModal = (e) => {
    this.setState({
      modalselected: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="row text-center p-3">
          <div className="col-xl-3">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <button className="btn btn-dark">Back</button>
            </Link>
          </div>
          <div className="col-xl-6 ">
            <Dropdowns isSelected={this.isSelected} />
            <button onClick={this.handleClick} className="btn btn-danger">
              Click to open the Modal
            </button>
            <Modal
              show={this.state.show}
              onHide={this.handleClick}
              backdrop="static"
              keyboard={false}
              size="xl"
            >
              <Modal.Header closeButton>
                <Modal.Title>Select your tab</Modal.Title>
              </Modal.Header>

              <Modal.Body class="text-center">
                <StudentNav
                  tabss={this.state.navtab}
                  isSelected={this.isSelectedModal}
                >
                  <StudentNavData
                    selected={this.state.modalselected === "Profile"}
                  >
                    <Form1 value={this.state} onChange={this.handleChange} />
                  </StudentNavData>

                  <StudentNavData
                    selected={this.state.modalselected === "Academic"}
                  >
                    <Form2 value={this.state} onChange={this.handleChange} />
                  </StudentNavData>

                  <StudentNavData
                    selected={this.state.modalselected === "Teacher"}
                  >
                    <Form3 value={this.state} onChange={this.handleChange} />
                  </StudentNavData>
                </StudentNav>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClick}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <StudentNav tabss={this.state.navtab} isSelected={this.isSelected}>
              <StudentNavData selected={this.state.selected === "Profile"}>
                <Form1 value={this.state} onChange={this.handleChange} />
              </StudentNavData>

              <StudentNavData selected={this.state.selected === "Academic"}>
                <Form2 value={this.state} onChange={this.handleChange} />
              </StudentNavData>

              <StudentNavData selected={this.state.selected === "Teacher"}>
                <Form3 value={this.state} onChange={this.handleChange} />
              </StudentNavData>
            </StudentNav>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    );
  }
}
