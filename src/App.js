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
    },
    data: [],
    employee: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    index: ""
  };

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

  handleUpdate = employee => {
    const data = [...this.state.data];
    const index = data.indexOf(employee);
    data[index] = { ...employee };
    this.setState({ employee });
    this.setState({ data });
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
                  render={props => (
                    <Body
                      data={this.state.data}
                      handleDelete={this.handleDelete}
                      handleUpdate={this.handleUpdate}
                      bodyInfo={this.state.bodyData}
                      {...props}
                    />
                  )}
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
                <Route
                  path="/Update/:id"
                  render={props => (
                    <AddPeople
                      bodyInfo={this.state.bodyData}
                      employee={this.state.employee}
                      index={this.state.index}
                      handleUpdateView={this.handleUpdateView}
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
