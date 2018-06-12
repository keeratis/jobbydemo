import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Select extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <Link to="/student_register">
                <button
                  type="button"
                  className="btn btn-primary btn-xl btn-block "
                >
                  สำหรับนักศึกษา
                </button>
              </Link>
            </div>
            <div className="col-md-6 m-auto">
              <Link to="/company_register">
                <button
                  type="button"
                  className="btn btn-success btn-xl btn-block "
                >
                  สำหรับบริษัท
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
