import React from 'react';
import logo from '../Assets/Images/logo.svg';
import '../CSS/Header.css'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = (props) => {

    if(props.location.pathname=== "/" || props.location.pathname=== "/reg"  ){
        return (false);
    }
    else {
    return (
        <div>
            <Navbar className="navbar_bg" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="logo"
                    src={logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top mx-1 logo img-fluid"
                    />
                    <span className="brand_name"> Task Management </span>
                </Navbar.Brand>
                <div className="logout_icon">
                    <Link to="/">
                        <Button className="bg-danger text-white logout">
                            Logout
                        </Button>
                    </Link>
                </div>
                </Container>
            </Navbar>

            
        </div>
    )
    }
}

export default withRouter(Header);
