import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    const onSubmit = event => {
      event.preventDefault();

      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData);
    };
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container h-100 ">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">เข้าสู่ระบบ</h1>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="อีเมล"
                    name="email"
                    value={this.state.email}
                    onChange={onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="พาสเวิร์ด"
                    name="password"
                    value={this.state.password}
                    onChange={onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-success btn-block btn-lg"
                  value="เข้าสู่ระบบ"
                />
              </form>
            </div>
          </div>
        </div>
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
)(Login);
