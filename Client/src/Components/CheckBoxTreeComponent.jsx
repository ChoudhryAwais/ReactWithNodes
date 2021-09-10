import React, { Component } from "react";
import { CheckboxTree } from "./CheckboxTree";
import { Tree } from "./Tree";

export class CheckBoxTreeComponent extends Component {
  constructor(props) {
    super(props);

    this.treeNodes = [
      {
        value: "patient",
        text: "Patient",
        status: false,
        nodes: [
          {
            value: "clinicalNote",
            text: "Clinical Note",
            status: false,
            nodes: [],
          },
          {
            value: "laborder",
            text: "Charges",
            status: false,
            nodes: [
              { value: "add", text: "Add", status: false },
              { value: "delete", text: "Delete", status: false },
            ],
          },
          {
            value: "payment",
            text: "Payment",
            status: false,
            nodes: [
              { value: "deleteCheck", text: "Delete Check", status: false },
              { value: "create", text: "Delete", status: false },
            ],
          },
          {
            value: "manualPosting",
            text: "Manual Posting",
            status: false,
            nodes: [
              { value: "add1", text: "Add", status: false },
              { value: "update1", text: "Update", status: false },
            ],
          },
        ],
      },
      {
        value: "dashboard",
        text: "Dashboard",
        status: false,
        nodes: [
          {
            value: "eHRDasbhoard",
            text: "EHR Dasbhoard",
            status: false,
            nodes: [],
          },
          {
            value: "billingDasbhoard",
            text: "Billing Dasbhoard",
            status: false,
            nodes: [
              {
                value: "agingSummary",
                text: "Aging Summary",
                status: false,
              },
              { value: "appointment", text: "Appointment", status: false },
            ],
          },
        ],
      },
      {
        value: "scheduler",
        text: "Scheduler",
        status: false,
        nodes: [
          {
            value: "view",
            text: "View",
            status: false,
            nodes: [
              { value: "add2", text: "Add", status: false },
              { value: "delete2", text: "Delete", status: false },
            ],
          },
          {
            value: "charges",
            text: "Charges",
            status: false,
            nodes: [
              { value: "create", text: "Create", status: false },
              { value: "delete3", text: "Delete", status: false },
              { value: "update", text: "Update", status: false },
            ],
          },
        ],
      },
    ];
    this.filtertree = [...this.treeNodes];

    this.state = {
      expanded: [],
      tree: this.treeNodes,
      filtertree: this.filtertree,
    };
  }

  handleCheck = (treeNodes) => {
    this.setState({
      filtertree: treeNodes,
    });
  };

  handleClick = (newArray) => {
    this.setState({
      expanded: newArray,
    });
  };

  handleChange = (filternodes) => {
    this.setState({
      filtertree: filternodes,
    });
  };

  render() {
    console.log("State", this.state);
    return (
      <div>
        <CheckboxTree
          nodes={this.state.tree} // filter the value from array
          filternodes={this.state.filtertree} //
          expanded={this.state.expanded}
          handleExpand={this.handleClick}
          changeState={this.handleCheck}
          column={2}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
