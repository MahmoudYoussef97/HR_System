import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getEmployees } from "../../services/employeeServices";
import "./Body.css";

class Body extends Component {
  state = {};

  render() {
    const { data, bodyInfo, user } = this.props;
    return (
      <React.Fragment>
        <div className="body-section">
          <div className="section-title pl-4">
            <h1 className="text-center pt-5">{bodyInfo.section} Section</h1>
          </div>
          {user.role === "IT" && (
            <Link to="/AddPeople" className="btn btn-warning add-button">
              Add {bodyInfo.section}
            </Link>
          )}
          <div className="table-area pt-4">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  {user.role == "IT" && <th scope="col">Update</th> && (
                    <th scope="col">Delete</th>
                  )}
                  {user.role == "Manager" && <th scope="col">Tasks</th>}
                </tr>
              </thead>
              <tbody>
                {data.map(
                  item =>
                    item.role === this.props.bodyInfo.section && (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        {user.role === "IT" && (
                          <td>
                            <Link to={`/Update/${item.name}`}>
                              <button
                                onClick={() => this.props.handleUpdate(item)}
                                className="btn btn-info btn-sm"
                              >
                                Update
                              </button>
                            </Link>
                          </td>
                        )}
                        {user.role === "IT" && (
                          <td>
                            <button
                              onClick={() =>
                                this.props.handleDelete(item.email)
                              }
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        )}
                        {user.role === "Manager" && (
                          <td>
                            <Link to={`/Tasks/${item._id}`}>
                              <button
                                onClick={() => this.props.handleUpdate(item)}
                                className="btn btn-info btn-sm"
                              >
                                Show Tasks
                              </button>
                            </Link>
                          </td>
                        )}
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

export default Body;
