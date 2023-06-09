import React, { useState } from "react";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios
      .post("https://fastkart.webiots.co.in/api/backend/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        navigate("/dashboard", Dashboard);
      })
      .catch((error) => {
        alert("please enter valid login details");
        console.log(error);
      });
  };
  return (
    <div className="log-in-section section-b-space">
      <Container className="w-100">
        <Row>
          <Col  lg={6} className="me-auto">
            <div className="log-in-box">
              <div className="log-in-title m-2">
                <h3>Welcome To FastKart</h3>
                <h4>Login Your Account </h4>
              </div>
              <div className="input-box">
                <Form className="row g-4 m-2">
                  <Row>
                    <Col >
                      <div className="form-floating theme-form-floating log-in-form">
                        <Input
                          id="email"
                          placeholder="Email Address"
                          className="form-control m-2"
                          value={email}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label>Enter Email</Label>
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className="form-floating theme-form-floating log-in-form">
                        <Input
                          id="password"
                          placeholder="password"
                          className="form-control m-2"
                          Label='Enter Password'
                          value={password}
                          type="password"
                          required 
                          onChange={(e) => setPassword(e.target.value)}
                        />
                          <Label>Enter Password </Label>
                      </div>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        title="Login"
                        className="btn btn-animation w-100 justify-content-center btn btn-false"
                        onClick={(e) => handleLogin(e)}
                        required
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;