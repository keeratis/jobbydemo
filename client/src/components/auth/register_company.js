import React, { Component } from "react";
import { Row, Col, Container, Button, FormText, Input, Form } from "reactstrap";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUserCompany } from "../../actions/authActions";

class Companyregister extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    fname: "",
    lname: "",
    idNo: "",
    idFile: "",
    companyName: "",
    companyDetail: "",
    tel: "",
    moreDetail: "",
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

      const newCompany = {
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        fname: this.state.fname,
        lname: this.state.lname,
        idNo: this.state.idNo,
        idFile: this.state.idFile,
        companyName: this.state.companyName,
        companyDetail: this.state.companyDetail,
        tel: this.state.tel,
        moreDetail: this.state.moreDetail
      };
      this.props.registerUserCompany(newCompany, this.props.history);
    };
    return (
      <div className="register">
        <Form onSubmit={onSubmit}>
          <Container>
            <Col>
              <Row className="margin-top-2">
                <Col md="4">อีเมล</Col>
                <Col md="8">
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
                <Col md="4">รหัสผ่าน</Col>
                <Col md="8">
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
                <Col md="4">ยืนยันรหัสผ่าน</Col>
                <Col md="8">
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
                <Col md="4">ชื่อ</Col>
                <Col md="8">
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
                <Col md="4">นามสกุล</Col>
                <Col md="8">
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
                <Col md="4">รหัสบัตรประชาชน</Col>
                <Col md="8">
                  <Input
                    name="idNo"
                    value={this.state.idNo}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.idNo
                    })}
                  />
                  <div className="invalid-feedback">{errors.idNo}</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="margin-top-2">
                <Col md="4">หลักฐานยืนยันตัวตน</Col>
                <Col md="8">
                  <Input
                    type="file"
                    name="idFile"
                    value={this.state.idFile}
                    onChange={onChange}
                  />

                  <FormText color="muted">
                    สำเนาบัตรประชาชน ไฟล์ PDF/JPG ขนาดไม่เกิน 4 MB
                  </FormText>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col md="4">ชื่อบริษัท</Col>
                <Col md="8">
                  <Input
                    name="companyName"
                    value={this.state.companyName}
                    onChange={onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.companyName
                    })}
                  />
                  <div className="invalid-feedback">{errors.companyName}</div>
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col md="4">ประเภทบริษัท</Col>
                <Col md="8">
                  <Input
                    type="text"
                    name="companyDetail"
                    value={this.state.companyDetail}
                    onChange={onChange}
                  />
                </Col>
              </Row>
              <Row className="margin-top-2">
                <Col md="4">เบอร์โทรศัพท์</Col>
                <Col md="8">
                  <Input
                    type="text"
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
                <Col md="4">รายละเอียดเพิ่มเติม</Col>
                <Col md="8">
                  <Input
                    type="textarea"
                    name="moreDetail"
                    value={this.state.moreDetail}
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
  { registerUserCompany }
)(withRouter(Companyregister));
