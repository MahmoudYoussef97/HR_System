import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./Body.css";

class Body extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + column.path;
  };
  render() {
    const { data, columns, bodyInfo } = this.props;
    console.log(columns);
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
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item._id}>
                    {columns.map(column => (
                      <td key={this.createKey(item, column)}>
                        {this.renderCell(item, column)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
