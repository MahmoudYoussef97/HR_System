import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
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
<<<<<<< HEAD
    },
    data: [],
    employee: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    }
||||||| merged common ancestors
    }
=======
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
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
  };
<<<<<<< HEAD

  // Get Request -- Completed
  async componentDidMount() {
    const { data } = await getEmployees();
    this.setState({ data });
  }

  // Delete Request -- Completed
  handleDelete = async employee => {
    const data = this.state.data.filter(e => e.email !== employee);
    this.setState({ data });
    await deleteEmployee(employee);
  };
  handleUpdate = async e => {
    console.log("object");
  };

  handleSubmitClick = employee => {
    const data = [employee, ...this.state.data];
    this.setState({ data });
  };
||||||| merged common ancestors
=======

  async componentDidMount() {
    const { data } = await getEmployees();
    this.setState({ data });
  }

  handleDelete = employee => {
    const data = this.state.data.filter(e => e.id !== employee.id);
    this.setState({ data });

    deleteEmployee(employee.id);
  };

>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
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
<<<<<<< HEAD
                  render={props => (
                    <Body
                      data={this.state.data}
                      handleDelete={this.handleDelete}
                      bodyInfo={this.state.bodyData}
                      {...props}
                    />
                  )}
||||||| merged common ancestors
                  component={() => <Body bodyInfo={this.state.bodyData} />}
=======
                  component={() => (
                    <Body
                      data={this.state.data}
                      columns={this.state.columns}
                      bodyInfo={this.state.bodyData}
                    />
                  )}
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
                />
                <Route
                  path="/AddPeople"
                  render={props => (
                    <AddPeople
                      bodyInfo={this.state.bodyData}
                      handleSubmitClick={this.handleSubmitClick}
                      {...props}
                    />
                  )}
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
