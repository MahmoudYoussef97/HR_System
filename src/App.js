import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Body from "./Components/Body/Body";
import AddPeople from "./Components/AddPeople/AddPeople";
import "./App.css";

class App extends Component {
  state = {
    bodyData: {
      id: "",
      aria: "",
      section: "Employees"
    }
  };
  onMouseClick = e => {
    const sec = e.target.id.split("-");
    const bodyData = { ...this.state.bodyData };
    bodyData.id = `v-pills-${sec[2]}`;
    bodyData.aria = `v-pills-${sec[2]}-tab`;
    bodyData.section = sec[2];
    this.setState({ bodyData });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <BrowserRouter>
              <div className="dashboard col-md-2">
                <Dashboard onClickMe={this.onMouseClick} />
              </div>
              <div className="info-body col-md-10">
                <Route
                  path="/"
                  exact
                  component={() => <Body bodyInfo={this.state.bodyData} />}
                />
                <Route
                  path="/AddPeople"
                  component={() => <AddPeople bodyInfo={this.state.bodyData} />}
                />
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
