import React from "react";
import { FirstFunctionCom } from "./FirstFunctionCom";

export class CheckboxTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "",
      count: 0,
    };
  }

  handleSearch = (e) => {
    this.setState(
      {
        searchtext: e.target.value,
      },
      () => this.handleChange()
    );
  };

  // for checks
  handleCheck = (e) => {
    if (e.target.value === "Parent") {
      let treeNodes = this.props.filternodes;

      treeNodes &&
        treeNodes.forEach((treeNode) => {
          if (treeNode.value === e.target.name) {
            treeNode.status = e.target.checked;
            treeNode.status = e.target.checked;
            treeNode.nodes &&
              treeNode.nodes.forEach((treeNodeChildren) => {
                treeNodeChildren.status = e.target.checked;
                treeNodeChildren.nodes &&
                  treeNodeChildren.nodes.forEach((childrenofchildren) => {
                    childrenofchildren.status = e.target.checked;
                  });
              });
          }
        });
      this.props.changeState(treeNodes);
    } else if (e.target.value === "Children") {
      let treeNodes = this.props.filternodes;
      treeNodes &&
        treeNodes.forEach((treeNode) => {
          let counter = 0;
          treeNode.nodes &&
            treeNode.nodes.forEach((treeNodeChildren) => {
              if (treeNodeChildren.value === e.target.name) {
                treeNodeChildren.status = e.target.checked;

                treeNodeChildren.nodes &&
                  treeNodeChildren.nodes.forEach((childrenofchildren) => {
                    childrenofchildren.status = e.target.checked;
                  });
              }

              if (treeNodeChildren.status) {
                counter += 1;
              } else {
              }
              if (counter === treeNode.nodes.length) {
                treeNode.status = true;
              } else {
                treeNode.status = false;
              }
            });
        });
      this.props.changeState(treeNodes);
    } else if (e.target.value === "subChildren") {
      let treeNodes = this.props.filternodes;
      treeNodes &&
        treeNodes.forEach((treeNode) => {
          treeNode.nodes &&
            treeNode.nodes.forEach((treeNodeChildren) => {
              let counter1 = 0;
              let counter = 0;
              treeNodeChildren.nodes &&
                treeNodeChildren.nodes.forEach((childrenofchildren) => {
                  if (childrenofchildren.value === e.target.name) {
                    childrenofchildren.status = e.target.checked;
                  }

                  if (childrenofchildren.status) {
                    counter1 += 1;
                  } else {
                  }

                  if (counter1 === treeNodeChildren.nodes.length) {
                    treeNodeChildren.status = true;

                    for (
                      let index = 0;
                      index < treeNode.nodes.length;
                      index++
                    ) {
                      if (treeNode.nodes[index].status) {
                        counter += 1;
                      } else {
                      }
                    }
                    if (
                      counter + counter1 >=
                      treeNode.nodes.length + treeNodeChildren.nodes.length
                    ) {
                      treeNode.status = true;
                    }
                  } else {
                    treeNodeChildren.status = false;
                    treeNode.status = false;
                  }
                });
            });
        });
      this.props.changeState(treeNodes);
    }
  };

  // for expands
  handleClick = (e) => {
    let newArray = this.props.expanded;
    if (this.props.expanded.includes(e.target.name)) {
      newArray = this.props.expanded.filter((value) => {
        return value !== e.target.name;
      });
    } else {
      newArray.push(e.target.name);
    }
    this.props.handleExpand(newArray);
  };

  // for search field
  handleChange = () => {
    let filternodes;
    filternodes = this.props.nodes.filter((items) =>
      items.text.toLowerCase().startsWith(this.state.searchtext.toLowerCase())
    );
    if (filternodes.length === 0) {
      // console.log("Enter into the children filter");

      filternodes = this.props.nodes.filter((items) =>
        items.nodes.find((childrenitem) =>
          childrenitem.text
            .toLowerCase()
            .startsWith(this.state.searchtext.toLowerCase())
        )
      );

      // filternodes = filternodes.filter((item) => item.length > 0);

      if (filternodes.length > 0) {
        // filternodes = filternodes.filter((item) => item !== undefined);
        // let filternodess = filternodes.map((items) =>
        //   items.nodes.map((item) =>
        //     item.text.toLowerCase().startsWith(e.target.value.toLowerCase())
        //   )
        // );
        // console.log(
        //   filternodess,
        //   filternodess.find((item) => item.length > 0),
        //   "newest array",
        //   filternodes.map((item) =>
        //     item.nodes.find((items, i) => filternodess[i])
        //   )
        // );
      }
    }
    if (filternodes.length === 0) {
      // console.log("Enter into the sub children filter");
      filternodes = this.props.nodes.map((items) =>
        items.nodes.filter((childrenitem) =>
          childrenitem.nodes.find((subChildren) =>
            subChildren.text
              .toLowerCase()
              .startsWith(this.state.searchtext.toLowerCase())
          )
        )
      );
      // filternodes = filternodes.map((items) =>
      //   items.nodes.find((childrenitem) =>
      //     childrenitem.text
      //       .toLowerCase()
      //       .startsWith(e.target.value.toLowerCase())
      //   )
      // );
      if (filternodes.length > 0) {
        let a = [];
        filternodes.map((item) =>
          item && item.length > 0 ? item.map((items) => a.push(items)) : ""
        );
        filternodes = a.filter((item) => item !== undefined);
      }
    }

    // console.log("new array", filternodes);
    this.props.handleChange(filternodes);
  };

  handleSave = () => {
    this.setState(
      {
        searchtext: "",
      },
      () => this.handleChange()
    );
  };

  render() {
    var { filternodes, column, expanded } = this.props;
    column = 12 / column;
    return (
      <React.Fragment>
        <div className="bg-info">
          <div className="display-4 text-center">Checkbox Tree</div>
          <div className="row text-center mt-2 mb-2">
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search List"
                onChange={this.handleSearch}
                value={this.state.searchtext}
              ></input>
            </div>
            <div className="col-md-5"></div>
          </div>
          <div className="row">
            {filternodes &&
              filternodes.map((items) => (
                <div
                  key={items.value}
                  className={"col-lg-" + column + " form-check"}
                >
                  {items.nodes && items.nodes.length > 0 ? (
                    <span>
                      <button
                        name={items.value}
                        onClick={this.handleClick}
                        class={
                          expanded.includes(items.value)
                            ? "fa fa-chevron-down btn "
                            : "fa fa-chevron-right btn "
                        }
                        aria-hidden="true"
                      ></button>
                    </span>
                  ) : null}

                  <span>
                    <input
                      id="flexCheckDefault"
                      value="Parent"
                      name={items.value}
                      onChange={this.handleCheck}
                      type="checkbox"
                      className="m-2"
                      checked={items.status}
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      {items.text}
                    </label>
                  </span>

                  {items.nodes &&
                  items.nodes.length > 0 &&
                  expanded.includes(items.value) ? (
                    <ul style={{ listStyle: "none" }}>
                      {items.nodes.map((childrenitem) => (
                        <div class="">
                          <li key={childrenitem.value}>
                            {childrenitem.nodes &&
                            childrenitem.nodes.length > 0 ? (
                              <span>
                                <button
                                  name={childrenitem.value}
                                  onClick={this.handleClick}
                                  class={
                                    expanded.includes(childrenitem.value)
                                      ? "fa fa-chevron-down btn "
                                      : "fa fa-chevron-right btn "
                                  }
                                  aria-hidden="true"
                                ></button>
                              </span>
                            ) : null}
                            <span>
                              <input
                                value="Children"
                                name={childrenitem.value}
                                type="checkbox"
                                className="m-2"
                                checked={childrenitem.status}
                                onChange={this.handleCheck}
                              ></input>
                            </span>
                            <span>{childrenitem.text}</span>
                            {childrenitem.nodes &&
                            childrenitem.nodes.length > 0 &&
                            expanded.includes(childrenitem.value) ? (
                              <ul style={{ listStyle: "none" }}>
                                {childrenitem.nodes.map((childrenitem2) => (
                                  <div class="d-flex">
                                    <span>
                                      <input
                                        value="subChildren"
                                        name={childrenitem2.value}
                                        type="checkbox"
                                        className="m-2"
                                        checked={childrenitem2.status}
                                        onChange={this.handleCheck}
                                      ></input>
                                    </span>
                                    <li key={childrenitem2.value}>
                                      {childrenitem2.text}
                                    </li>
                                  </div>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        </div>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
          </div>

          <div className="row text-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <button className="btn btn-success" onClick={this.handleSave}>
                Save
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <hr />
          <button
            className="btn btn-success btn-block"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Click
          </button>
          <FirstFunctionCom count={this.state.count} />
        </div>
      </React.Fragment>
    );
  }
}
