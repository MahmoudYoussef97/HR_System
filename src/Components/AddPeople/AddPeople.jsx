import React, { Component } from "react";
import "./AddPeople.css";

class AddPeople extends Component {
  state = {};
  render() {
    const bodyInfo = this.props.bodyInfo;

    return (
      <div className="add-people pl-4">
        <h1 className="text-center pt-3">{bodyInfo.section} Section</h1>

        <form className="mt-5">
          <label htmlFor="">{bodyInfo.section} Username</label>
          <input
            placeholder="Username"
            className="form-control mb-3"
            type="text"
          />
          <label htmlFor="">{bodyInfo.section} Email</label>
          <input
            placeholder="Email"
            className="form-control mb-3"
            type="text"
          />
          <label htmlFor="">{bodyInfo.section} Password</label>
          <input
            placeholder="Password"
            className="form-control mb-3"
            type="text"
          />
          <label htmlFor="">Re-Password</label>
          <input
            placeholder="Re-Password"
            className="form-control mb-3"
            type="text"
          />
          <label htmlFor="">Phone</label>
          <input
            placeholder="Phone"
            className="form-control mb-3"
            type="number"
          />
          <button className="btn btn-warning px-4">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPeople;
