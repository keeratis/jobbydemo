import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Home extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div className="App">
        <h1>สวัสดี {user.fname}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Home);
