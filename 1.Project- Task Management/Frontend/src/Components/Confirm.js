import React from 'react';
import '../CSS/Confirm.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterUser from '../Services/RegisterUser';
import Register from './Register';

function Confirm(props) {
 
  console.log(props.data);

  
  
  const saveData =  () =>{
      // console.log(props.data);
        RegisterUser.registerUser(props.data)
      .then(response => console.log(response))
      .catch(error => {
          console.error('There was an error!', error);
      });
     
  }
  const submitData =()=>{
      saveData();
      props.onHide();     
  }

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="confirm_modal"
      >
        <Modal.Header closeButton className="bg-light confirm_header py-1">
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="confirm_title">Confirm</p> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to continue ?</p>
          <div className="text-center confirm_btn">
            <Button onClick={props.onHide} className="btn-danger">
              <i className="fas fa-times"></i>          
            </Button>
            <Button className="btn-success" onClick={submitData} >
                {/* <Register data="save" /> */}
              <i className="fas fa-check"></i>
            </Button>
          </div>
        </Modal.Body>
        
      </Modal>
    );
  }
 
export default Confirm;    