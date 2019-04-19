import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Body.css";

class Body extends Component {
  render() {
    const bodyInfo = this.props.bodyInfo;
    console.log(bodyInfo);
    return (
      <React.Fragment>
        <div className="body-section">
          <div className="section-title">
            <h1 className="text-center pt-3">{bodyInfo.section} Section</h1>
          </div>
          <Link to="/AddPeople" className="btn btn-warning">
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
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
