import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./Body.css";
import { deleteEmployee } from "../../services/employeeServices";

class Body extends Component {
<<<<<<< HEAD
  /*
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + column.path;
  };
  */

||||||| merged common ancestors
=======
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + column.path;
  };
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
  render() {
<<<<<<< HEAD
    const { data, bodyInfo } = this.props;
||||||| merged common ancestors
    const bodyInfo = this.props.bodyInfo;
    console.log(bodyInfo);
=======
    const { data, columns, bodyInfo } = this.props;
    console.log(columns);
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
    return (
      <React.Fragment>
        <div className="body-section">
          <div className="section-title">
            <h1 className="text-center pt-3">{bodyInfo.section} Section</h1>
          </div>
          <Link to="/AddPeople" className="btn btn-warning add-button">
            Add {bodyInfo.section}
          </Link>
          <div className="table-area pt-4">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
<<<<<<< HEAD
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
||||||| merged common ancestors
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
=======
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th />
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {data.map(item => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        onClick={() => this.props.handleDelete(item.email)}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.props.handleDelete(item.email)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
||||||| merged common ancestors
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
=======
                {data.map(item => (
                  <tr key={item._id}>
                    {columns.map(column => (
                      <td key={this.createKey(item, column)}>
                        {this.renderCell(item, column)}
                      </td>
                    ))}
                  </tr>
                ))}
>>>>>>> cd8599dcb38db6b8823920709b439d3a936dddf5
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
