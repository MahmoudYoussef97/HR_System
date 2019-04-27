import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Body from "./Components/Body/Body";
import AddPeople from "./Components/AddPeople/AddPeople";
import { getEmployees, deleteEmployee } from "./services/employeeServices";
import "./App.css";
import Particles from "react-particles-js";
import { loginUser } from "./services/loginServices";
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
    index: "",
    login: {
      email: "",
      password: ""
    }
  };

  // Get Request -- Completed
  async componentDidMount() {
    const { data } = await getEmployees();
    this.setState({
      data
    });
  }

  // Delete Request -- Completed
  handleDelete = async employee => {
    const data = this.state.data.filter(e => e.email !== employee);
    this.setState({
      data
    });
    await deleteEmployee(employee);
  };

  handleUpdate = employee => {
    const data = [...this.state.data];
    const index = data.indexOf(employee);
    data[index] = {
      ...employee
    };
    this.setState({
      employee
    });
    this.setState({
      data
    });
  };

  onMouseClick = e => {
    const sec = e.target.id.split("-");
    const bodyData = {
      ...this.state.bodyData
    };
    bodyData.id = `v-pills-${sec[2]}`;
    bodyData.aria = `v-pills-${sec[2]}-tab`;
    bodyData.section = sec[2];
    this.setState({
      bodyData
    });
  };

  handleChange = e => {
    const login = {
      ...this.state.login
    };
    login[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      login
    });
  };

  handleLogin = async e => {
    e.preventDefault();
    console.log(this.state.login);
    await loginUser(this.state.login.email, this.state.login.password);
    const login = {
      email: "",
      password: ""
    };
    this.setState({
      login
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={props => (
              <div className="parti">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 150
                      },
                      size: {
                        value: 5
                      }
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse"
                        }
                      }
                    }
                  }}
                />{" "}
                <h1 className="text-center pt-5"> HR Login Form </h1>{" "}
                <div className="login">
                  <form onSubmit={this.handleLogin} className="mt-5">
                    <label htmlFor=""> Email </label>{" "}
                    <input
                      placeholder="Email"
                      className="form-control mb-3"
                      type="text"
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.login.email}
                    />{" "}
                    <label htmlFor="email"> Password </label>{" "}
                    <input
                      placeholder="Password"
                      className="form-control mb-3"
                      type="text"
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.login.password}
                    />{" "}
                    <button className="btn btn-warning px-4"> Login </button>{" "}
                  </form>{" "}
                </div>{" "}
              </div>
            )}
          />
          <Route
            path="/profile"
            exact
            render={props => (
              <div className="container-fluid">
                <div className="row">
                  <div className="dashboard col-md-2">
                    <Dashboard onClickMe={this.onMouseClick} />{" "}
                  </div>{" "}
                  <div className="info-body col-md-10">
                    <Body
                      data={this.state.data}
                      handleDelete={this.handleDelete}
                      handleUpdate={this.handleUpdate}
                      bodyInfo={this.state.bodyData}
                      {...props}
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}
          />{" "}
          <Route
            path="/AddPeople"
            render={props => (
              <AddPeople
                bodyInfo={this.state.bodyData}
                handleSubmitClick={this.handleSubmitClick}
                {...props}
              />
            )}
          />{" "}
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
          />{" "}
        </BrowserRouter>{" "}
      </div>
    );
  }
}

export default App;
