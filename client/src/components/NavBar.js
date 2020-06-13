import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Button } from 'react-bootstrap'
import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function NavBar2(props) {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation()

  const renderNavLink = (path, text) =>
    <Nav.Link>
      <Link to ={path} className="style-link" style={{color: "#CD4545", fontFamily:"'Anton', sans-serif", fontSize:"30px"}}>
        {text}
      </Link>
    </Nav.Link>


  return (<>
    <Navbar className="color-nav" expand="lg" isAuthenticated={props.isAuthenticated} handleLogout={props.handleLogout}>
      <Navbar.Brand className="style-brand" style={{color: "#FAFAD2", fontFamily:"'Anton', sans-serif", fontSize:"50px"}}>
        <Link to="/"  className="style-brand" style={{color: "#FAFAD2", fontFamily:"'Anton', sans-serif", fontSize:"50px"}}>Organizing for Change</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {renderNavLink('/history', 'History of Inequality')}
          {props.isAuthenticated ?
            <Button className="style-link" variant="link" onClick={props.handleLogout} style={{color: "#CD4545", fontFamily:"'Anton', sans-serif", fontSize:"30px"}}>Logout</Button>
            :
            <>
              {renderNavLink('/sign-up', 'Sign-up')}
              {renderNavLink('/login', 'Login')}
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>)
}

export default NavBar2;
