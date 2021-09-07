import React, { useState } from "react";
import '../CSS/Registration.css';
import '../CSS/Confirm.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { Link, useHistory } from "react-router-dom";
// import Confirm from "./Confirm";
import RegistrationValid from "./Validations/RegistrationValid.js";
import RegisterUser from '../Services/RegisterUser';



const Register = () => {
  const history= useHistory();
  const [smShow, setSmShow] = React.useState(false);
//   const[showModal, setShowModal] = useState("hide")
  const [styles, setStyles] = useState("reg_details");
  const [details, setDetails] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  let objectLength = Object.keys(errors).length;
  // console.log(objectLenght);
  const InputEventHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setErrors(RegistrationValid(details));
    setStyles("error_display");
  };
  const  confirmbox = () =>{
      if(objectLength=== 0){
        setSmShow(true);
        // <Confirm data={details} />
      setStyles("reg_details");
      // saveData();
      
      // console.log(regdetails);
    }
    if(details.name === "" || details.password === "" || details.email === "" || details.mobile === "" ){
      alert("Fill all The Required Fields");
      setSmShow(false);
    }
  }
  const submitfun = () => {
      confirmbox();
  }
  const saveData = () =>{
    setSmShow(false);
    RegisterUser.registerUser(details)
        .then(response => {console.log(response)
          history.push("/")
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }
  
  // let regdetails= details;

  // function getConfirmation (){
  //   alert("hello user")
  // }


  return (
    <>
      <div className="container my-5 reg_div">
        <div className="row">
          <div className="col-lg-12 reg_form">
            <div className={styles}>
              <h1>User Registration</h1>
              <Form>
                <Form.Group className="my-3" controlId="formBasicUsername">
                  <Form.Control
                    className="input_data"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={details.name}
                    onChange={InputEventHandler}
                    autoComplete="off"
                  />
                  <p className="mb-1">
                    {errors.name && (
                      <small className="error_msg">{errors.name}</small>
                    )}
                  </p>
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicPassword">
                  <Form.Control
                    className="input_data"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={InputEventHandler}
                    autoComplete="off"
                  />
                  <p className="mb-1">
                    {errors.password && (
                      <small className="error_msg">{errors.password}</small>
                    )}
                  </p>
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicEmail">
                  <Form.Control
                    className="input_data"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={details.email}
                    onChange={InputEventHandler}
                    autoComplete="off"
                  />
                  <p className="mb-1">
                    {errors.email && (
                      <small className="error_msg">{errors.email}</small>
                    )}
                  </p>
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicMobile">
                  <Form.Control
                    className="input_data"
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={details.mobile}
                    onChange={InputEventHandler}
                    autoComplete="off"
                    maxLength='10'
                  />
                  <p className="mb-1">
                    {errors.mobile && (
                      <small className="error_msg">{errors.mobile}</small>
                    )}
                  </p>
                </Form.Group>
                <div className="text-center mt-3">
                  <Button
                    className="mt-3"
                    variant="outline-primary"
                    onClick={submitfun}
                  >
                    {/* <Confirm data={details.name} /> */}
                    Register
                  </Button>
                  {/* <Confirm show={smShow} onHide={() => setSmShow(false)} /> */}
                </div>
                <br />
                <div className="text-center pb-3">
                  <p className="mt-1 new_user">Already Have Account</p>
                  <Link exact to="/" className="mt-0" style={{textDecoration:"none"}}>
                       <p className="text-primary">Login</p>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Modal show={smShow} onHide={() => setSmShow(false)} animation={false} className="d-flex justify-content-center align-items-center">
        <Modal.Header closeButton className="bg-light confirm_header py-1">
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="confirm_title">Confirm</p> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to continue ?</p>
          <div className="text-center confirm_btn">
            <Button onClick={() => setSmShow(false)} className="btn-danger">
              <i className="fas fa-times"></i>          
            </Button>
            <Button className="btn-success"onClick={saveData} >
                {/* <Register data="save" /> */}
              <i className="fas fa-check"></i>
            </Button>
          </div>
        </Modal.Body>
        
        
      </Modal>
    </>
  );
};

export default Register;