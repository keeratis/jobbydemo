import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  CustomInput,
  FormText,
  Input,
  Form
} from "reactstrap";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUserStudent } from "../../actions/authActions";

class Studentregister extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    fname: "",
    lname: "",
    nickname: "",
    birtDate: "",
    gender: "",
    university: "",
    tel: "",
    lineId: "",
    exp: "",
    pic: "",
    ability: "",
    errors: {}
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { errors } = this.state;

    const onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    const onSubmit = event => {
      event.preventDefault();

      const newStudent = {
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        fname: this.state.fname,
        lname: this.state.lname,
        nickname: this.state.nickname,
        birtDate: this.state.birtDate,
        gender: this.state.gender,
        university: this.state.university,
        tel: this.state.tel,
        lineId: this.state.lineId,
        exp: this.state.exp,
        pic: this.state.pic,
        ability: this.state.ability
      };

      this.props.registerUserStudent(newStudent, this.props.history);
    };
    return (
      <div className="register">
        <Form onSubmit={onSubmit}>
          <Container>
            <Col>
              <Row className="margin-top-2">
                <Col lg="4">อีเมล</Col>
                <Col lg="8">
                  <Input
                    name="email"
                    value={this.state.email}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">รหัสผ่าน</Col>
                <Col lg="8">
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                  />
                  <div className="invalid-feedback">{errors.password}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">ยืนยันรหัสผ่าน</Col>
                <Col lg="8">
                  <Input
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password2
                    })}
                  />
                  <div className="invalid-feedback">{errors.password2}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">ชื่อ</Col>
                <Col lg="8">
                  <Input
                    name="fname"
                    value={this.state.fname}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fname
                    })}
                  />
                  <div className="invalid-feedback">{errors.fname}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">นามสกุล</Col>
                <Col lg="8">
                  <Input
                    name="lname"
                    value={this.state.lname}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.lname
                    })}
                  />
                  <div className="invalid-feedback">{errors.lname}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">ชื่อเล่น</Col>
                <Col lg="8">
                  <Input
                    name="nickname"
                    value={this.state.nickname}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.nickname
                    })}
                  />
                  <div className="invalid-feedback">{errors.nickname}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">วันเกิด</Col>
                <Col lg="8">
                  <Input
                    type="date"
                    name="birtDate"
                    value={this.state.birtDate}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.birtDate
                    })}
                  />
                  <div className="invalid-feedback">{errors.birtDate}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">เพศ</Col>
                <Col lg="8">
                  <FormGroup>
                    <CustomInput
                      type="radio"
                      id="gender"
                      label="ชาย"
                      value="male"
                      name="gender"
                      onChange={onChange}
                    />
                    <CustomInput
                      type="radio"
                      id="gender2"
                      label="หญิง"
                      value="female"
                      name="gender"
                      onChange={onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">มหาวิทยาลัย</Col>
                <Col lg="8">
                  <Input
                    name="university"
                    value={this.state.university}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.university
                    })}
                  />
                  <div className="invalid-feedback">{errors.university}</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="margin-top-2">
                <Col lg="4">เบอร์โทร</Col>
                <Col lg="8">
                  <Input
                    name="tel"
                    value={this.state.tel}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.tel
                    })}
                  />
                  <div className="invalid-feedback">{errors.tel}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">Line ID</Col>
                <Col lg="8">
                  <Input
                    name="lineId"
                    value={this.state.lineId}
                    onChange={onChange}
                  />
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">ประสบการณ์</Col>
                <Col lg="8">
                  <Input
                    type="textarea"
                    name="exp"
                    value={this.state.exp}
                    onChange={onChange}
                  />
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">รูปถ่าย</Col>
                <Col lg="8">
                  <Input
                    type="file"
                    name="pic"
                    value={this.state.pic}
                    onChange={onChange}
                  />
                  <FormText color="muted">รูปถ่ายขนาดไม่เกิน 2 MB</FormText>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col lg="4">ความสามารถ</Col>
                <Col lg="8">
                  <Input
                    type="textarea"
                    name="ability"
                    value={this.state.ability}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            </Col>

            <Button
              type="submit"
              color="primary "
              size="lg"
              className="registerButton"
              block
            >
              ยืนยัน
            </Button>
          </Container>
        </Form>
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
  { registerUserStudent }
)(withRouter(Studentregister));
