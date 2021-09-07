import React from 'react';
import '../CSS/Home.css';
import Tables from '../Components/Tables';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';




const Home = () => {


    let weekdays= ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Satureday"];
    let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let currentDate= new Date();
    let dates= currentDate.getDate();
    let months= month[currentDate.getMonth()];
    let years= currentDate.getFullYear();
    let days= weekdays[currentDate.getDay()];

    


    return (
        <div>
                <div className="container home_div ">
                    <div className="home_details">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 text-center dashbord">
                            <div className="welcome_home text-center text-md-center">
                                <div>
                                 <p className="day_date">{`${days}, ${dates} ${months} ${years} `}</p>
                                    <h2>Welcome, <span className="usernm">Omkar</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-center">
                            <div className="addtask text-center">
                                <Link to="/add" className="mt-5 text-white" >
                                    <Button variant="outline-dark" className="mt-5 text-white btn_task "> Add New Task</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row w-100 mt-5">
                        <div className="col-lg-12 w-100" >
                            <Tables/>
                        </div>
                    </div>
                    </div>
                </div>
             
        </div>
    )
}

export default Home;
