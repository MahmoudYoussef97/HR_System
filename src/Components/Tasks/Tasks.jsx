import React, { Component } from "react";
import "./Tasks.css";

class Taskes extends Component {
  state = {
    employee: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      role: ""
    },
    Task: {
      task: ""
    },
    show: false,
    jwt: "",
    status: "NotDone",
    statusType: "btn-danger"
  };
  /*
  async componentDidMount() {
    console.log(this.props.token);
    const { employee } = await getEmployee(
      this.props.match.params.id,
      this.props.token
    );
    this.setState({ employee });
    console.log(this.state.employee);
  }
*/
  handleChange = e => {
    const Task = { ...this.state.Task };
    Task[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ Task });
  };
  addTask = () => {
    let show = { ...this.state.show };
    show = true;
    this.setState({ show });
  };
  handleSubmit = async e => {
    e.preventDefault();
  };
  handleStatus = () => {
    let status = { ...this.state.status };
    let statusType = { ...this.state.statusType };
    if (status === "Done") {
      status = "NotDone";
      statusType = "btn-danger";
    } else {
      status = "Done";
      statusType = "btn-success";
    }
    this.setState({ status, statusType });
  };
  handleDelete = () => {};
  render() {
    const { data, employee } = this.props;
    return (
      <React.Fragment>
        <div className="body-section">
          <div className="section-title pl-4">
            <h1 className="text-center pt-5 pb-3">{employee.name} Tasks</h1>
          </div>
          <button onClick={() => this.addTask()} className="btn btn-warning ">
            Add Task
          </button>
          <form onSubmit={this.handleSubmit} className="tasks mt-2">
            {this.state.show && (
              <input
                placeholder="Task"
                className="form-control mb-2"
                type="text"
                id="task"
                name="task"
                onChange={this.handleChange}
                value={this.state.Task.task}
              />
            )}
            {this.state.show && (
              <button className="btn btn-warning mb-1 add_button">Add</button>
            )}
          </form>
          <div className="table-area pt-2">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  item =>
                    item.email === employee.email && (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>
                          <button
                            onClick={() => this.handleStatus()}
                            className={`btn ${this.state.statusType} btn-sm`}
                          >
                            {this.state.status}
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => this.handleDelete(item._id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Taskes;
