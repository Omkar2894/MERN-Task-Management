import React, { useState } from "react";
import "../CSS/Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img1 from "../Assets/Images/img1.svg";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const InputEventHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container bg-light my-5 main_div">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 my-md-5  my-lg-auto order-sm-2 order-md-1 order-lg-1 order-2">
            <div className="form_div">
              <h1>User Login</h1>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={login.username}
                    onChange={InputEventHandler}
                    autoComplete="off"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={InputEventHandler}
                  />
                </FloatingLabel>

                <div className="text-center">
                  <Link exact to="/home" className="mt-0">
                    <Button variant="outline-primary" type="submit">
                      Login
                    </Button>
                  </Link>

                </div>
                <br />
                <div className="text-center">
                  <p className="mt-3 new_user">New User</p>
                  <Link exact to="/reg" className="mt-0" style={{textDecoration:"none"}}>
                    <p className="text-primary">Register</p>
                  </Link>
                </div>
              </Form>
            </div>
          </div>

          <div className="col-lg-6 col-md-4 col-sm-12 mt-md-5 order-sm-1 order-md-2  order-lg-2 order-1">
            <img className="img-fluid my-md-5 login_img" src={img1} alt="loginpage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
