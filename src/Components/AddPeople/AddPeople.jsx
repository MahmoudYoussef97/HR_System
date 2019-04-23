import React, { Component } from "react";
import "./AddPeople.css";
import { updateEmployee, addEmployee } from "../../services/employeeServices";

class AddPeople extends Component {
  state = {
    data: [],
    employee: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    }
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.state.employee = this.props.employee;
      this.state.employee.rePassword = this.props.employee.password;
      const employee = { ...this.state.employee };
      this.setState({ employee });
    }
  }
  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.match.params.id) {
      const employee = { ...this.state.employee };
      this.props.handleUpdateView(employee, this.props.index);
      await updateEmployee(employee, this.props.employee.email);
      this.setState({ employee });
      this.props.history.replace("/");
    } else {
      this.props.handleSubmitClick(this.state.employee);
      await addEmployee(this.state.employee);
      const employee = {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: ""
      };
      this.setState({ employee });
      this.props.history.push("/");
    }
  };

  handleChange = e => {
    const employee = { ...this.state.employee };
    employee[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ employee });
  };

  render() {
    const bodyInfo = this.props.bodyInfo;
    return (
      <div className="add-people pl-4">
        <h1 className="text-center pt-3">{bodyInfo.section} Section</h1>

        <form onSubmit={this.handleSubmit} className="mt-5">
          <label htmlFor="">{bodyInfo.section} Username</label>
          <input
            placeholder="Username"
            className="form-control mb-3"
            type="text"
            id="username"
            name="name"
            onChange={this.handleChange}
            value={this.state.employee.name}
          />
          <label htmlFor="email">{bodyInfo.section} Email</label>
          <input
            placeholder="Email"
            className="form-control mb-3"
            type="text"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.employee.email}
          />
          <label htmlFor="password">{bodyInfo.section} Password</label>
          <input
            placeholder="Password"
            className="form-control mb-3"
            type="text"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.employee.password}
          />
          <label htmlFor="rePassword">Re-Password</label>
          <input
            placeholder="Re-Password"
            className="form-control mb-3"
            type="text"
            id="rePassword"
            name="rePassword"
            onChange={this.handleChange}
            value={this.state.employee.rePassword}
          />
          <label htmlFor="phone">Phone</label>
          <input
            placeholder="Phone"
            className="form-control mb-3"
            type="number"
            id="phone"
            name="phone"
            onChange={this.handleChange}
            value={this.state.employee.phone}
          />
          <button className="btn btn-warning px-4">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPeople;
