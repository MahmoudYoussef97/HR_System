import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Body from "./Components/Body/Body";
import AddPeople from "./Components/AddPeople/AddPeople";
import { getEmployees, deleteEmployee } from "./services/employeeServices";
import "./App.css";

class App extends Component {
  state = {
    bodyData: {
      id: "",
      aria: "",
      section: "Employees"
    },
    data: [],
    columns: [
      { path: "id", label: "#" },
      { path: "name", label: "First" },
      { path: "username", label: "Last" },
      { path: "email", label: "Handle" },
      {
        key: "delete",
        content: employee => (
          <button
            onClick={() => this.handleDelete(employee)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      }
    ]
  };

  async componentDidMount() {
    const { data } = await getEmployees();
    this.setState({ data });
  }

  handleDelete = employee => {
    const data = this.state.data.filter(e => e.id !== employee.id);
    this.setState({ data });

    deleteEmployee(employee.id);
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
                  component={() => (
                    <Body
                      data={this.state.data}
                      columns={this.state.columns}
                      bodyInfo={this.state.bodyData}
                    />
                  )}
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
