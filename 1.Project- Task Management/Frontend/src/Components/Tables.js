import React, { useEffect, useState } from 'react';
import '../CSS/Tables.css';
import '../CSS/Confirm.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import ShowTasks from '../Services/ShowTasks';
import DeleteTask from '../Services/DeleteTask';
import ShowTable from '../Services/ShowTable';
import Pagination from './Pagination';
import Search from './Search';


const Tables = () => {
  const [smShow, setSmShow] = useState(false);
  const [data, setData] = useState([])
  const [taskId, setTaskId] = useState("");
  const [showPerPage, setShowPerPage] = useState(4)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  // const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    getSearchKey()
    loadtable()
  }, []);
  
  // This Function is used to load table data which show all tasks in the table 
  const loadtable = () => {
    ShowTasks.showTasks()
      .then(response => setData(response.data))
  }

  
  
  // This Function is pass to Pagination Component to get Start and end Value for moving.
  const onClickPagenation = (startValue, endValue) => {
    setPagination({ start: startValue, end: endValue })
  }
  
  //This function pass to Search Component to get Search Key from autoComplete selected Value.
  const getSearchKey = (searchKeyValue) => {
    // setSearchKey(searchKeyValue);
    searchTask(searchKeyValue)
  }
  
  //This function will call the api to get the data Based on "searchkey" which coming from autoComplete Value i.e. "React Select" 
  //Here we give condition if Searchkey is equals to null the all data in the table will show
  //else its will show only those data that match the searchkey.  
  const searchTask =  (searchKey) =>{
    console.log(searchKey);
    // let searchLength= searchKey.length;
    if(searchKey !== ''){ 
      ShowTable.searchTable(searchKey)
      .then(response => {console.log(response.data);
        setData(response.data);
      } 
      )
    }
    else if(searchKey=== ''){
      ShowTasks.showTasks()
      .then(response => setData(response.data))
    }
  }
  
  //For the Normal Search i.e. Based on Input Text We Write function as and this function is passed to onChange event of Input Field. (which is Shown below)
  
  //   const searchTask =  (searchKey) =>{
    //     console.log(searchKey);
    //     let searchLength= searchKey.length;
    //     if(searchLength > 0){ 
      //         ShowTable.searchTable(searchKey)
      //       .then(response => {console.log(response.data);
      //        setData(response.data);
      //         } 
      //     )
      //   }
      //   else if(searchKey=== 0){
  //     ShowTasks.showTasks()
  //     .then(response => setData(response.data))
  //   }
  // }
  
  
  // This Function is Called when Delete button is Clicked. this will show the "Confirm Box" and taskId will assign in useState using "setTaskId" that comes as a props.
  const confirmDelete = (id) => {
    // console.log(id)
    setSmShow(true);
    setTaskId(id);
  }
  
  //This Function is called onClick of "Check Button" in the Confirm Modal the taskId set in
  //confirmDelete function will Passed as a props to this function.
  //Here we first hide the Confirmation Modal and the call the api using DeleteTask Coming from 
  //DeleteTask.js file from Services and Reload the table using "loadtable" function 

  const deleteTask = (id) => {
    setSmShow(false)
    DeleteTask.deleteTasks(id)
    .then(response => {
      console.log(response.data);
      loadtable()
    });
  }
  
  


  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className=" col-lg-3 col-md-4 col-sm-8 ms-lg-auto ms-md-auto ms-sm-auto my-2">
              {/* <div className="my-2 d-flex justify-content-around align-items-center w-100"> */}
              {/* <input type="text" name="searchkeyword" placeholder="Search" onChange={(e)=> searchTask(e.target.value)}  autoComplete='off' /> */}
              <Search className="w-100" getSearchKey={getSearchKey}>
                <i class="fas fa-search"></i>
              </Search>

              {/* </div> */}
            </div>
          </div>
        </div>

        <Table bordered hover size="sm" className="w-100">
          <thead className="text-center">
            <tr>
              <th className="w-25">Task Name</th>
              <th className="w-50">Task Info</th>
              <th className="actions_list w-25"> Options</th>
            </tr>
          </thead>
          <tbody>
            {
              data.slice(pagination.start, pagination.end).map((currEle, index) => {

                const { _id, taskName, taskInfo } = currEle;

                return (
                  <tr className="table_rows" key={index}>
                    <td>{taskName}</td>
                    <td className="overflow-auto">{taskInfo}</td>
                    <td className="text-center actions flex-sm-wrap">
                      <Link to={`/edit/${_id}`} >
                        <Button className="bg-warning" >
                          <i className="fas fa-pen-alt  edit"></i>
                        </Button>
                      </Link>
                      <Button className="bg-danger" onClick={() => confirmDelete(_id)}>
                        <i className="fas fa-trash-alt delete"> </i>
                      </Button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
        <div className="container text-center">
          <div className="row">
            <div className=" col-lg-2 col-md-2 col-sm-2 ms-lg-auto ms-md-auto ms-sm-auto">
              <Pagination showPerPage={showPerPage} onClickPagenation={onClickPagenation} total={data.length} />
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
            <Button className="btn-success" onClick={() => deleteTask(taskId)}>
              <i className="fas fa-check"></i>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Tables;
