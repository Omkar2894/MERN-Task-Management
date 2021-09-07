import React, { useEffect, useState } from 'react';
import "../CSS/Addtask.css";
import '../CSS/Confirm.css';
import Modal from 'react-bootstrap/Modal';
// import Confirm from '../Components/Confirm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';
import SingleTask from '../Services/SingleTask';
import EditTask from '../Services/EditTask';


const Edittask = () => {
    let history= useHistory();
    const {id} = useParams();
    const [taskDetails, setTaskDetails] = useState({
        taskName:"",
        taskInfo:"",
    });
    const [smShow,setSmShow] =useState(false);
    // const [data, setData] = useState({})

    const InputEventHandle = (e) => {
        setTaskDetails({...taskDetails, [e.target.name]: e.target.value });
        // console.log(taskDetails);
    };

    const edittask = () =>{
        setSmShow(false)
        EditTask.editTask(taskDetails, id)
        .then(response => {console.log(response);
            history.push("/home")
        }
        )
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    // console.log(data);

    useEffect(()=>{
        loadTask()
      },[])

    const loadTask = () =>{
        SingleTask.showSingleTasks(id)
        .then(response => setTaskDetails(response.data))
    }



    return (
        <>
        <div className="container task_div">
            <div className="row">
                <div className="col-lg-12 reg_form z3">
                    <div className="task_details">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control type="text" name="taskName" value={taskDetails.taskName} onChange={InputEventHandle} autoComplete="off" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Task Info</Form.Label>
                                <Form.Control as="textarea" rows={3} name="taskInfo" value={taskDetails.taskInfo} onChange={InputEventHandle} />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="outline-primary" onClick={() => setSmShow(true)}>
                                {/* <Confirm  tasks={taskDetails} /> */}
                                        Update
                                </Button>
                                {/* <Confirm
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                /> */}
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
            <Button className="btn-success" onClick={edittask} >
                {/* <Register data="save" /> */}
              <i className="fas fa-check"></i>
            </Button>
          </div>
        </Modal.Body>
        
        
      </Modal>
        </>
    )
}

export default Edittask;
