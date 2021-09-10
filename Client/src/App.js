import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { SideNav } from "./Components/SideNav-Component";
import { Home } from "./Components/Home-Component";
import { Student } from "./Components/Student-Component";
import { Teacher } from "./Components/Teacher-Component";
import { Courses } from "./Components/Courses-Component";
import { LatestTable } from "./Components/LatestTable";
import { LatestTable2 } from "./Components/LatestTable2";
import { CheckBoxTreeComponent } from "./Components/CheckBoxTreeComponent";
import { TreeComponent } from "./Components/TreeComponent";
import { FirstFunctionCom } from "./Components/FirstFunctionCom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/firstFunctionComponent"
              component={FirstFunctionCom}
            ></Route>
            <Route path="/tree" component={TreeComponent}></Route>
            <Route
              path="/checkboxtree"
              component={CheckBoxTreeComponent}
            ></Route>
            <Route path="/latesttable2" component={LatestTable2}></Route>
            <Route path="/latesttable" component={LatestTable}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Route path="/teacher" component={Teacher}></Route>
            <Route path="/student" component={Student}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
