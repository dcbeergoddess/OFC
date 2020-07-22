import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Button } from 'react-bootstrap'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function NavBar2(props) {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation()

  const renderNavLink = (path, text, color = '#CD4545') =>
    <Nav.Link>
      <Link to ={path} className="style-link" style={{color: color, fontFamily:"'Anton', sans-serif", fontSize:"1.9rem"}}>
        {text}
      </Link>
    </Nav.Link>


  return (<>
    <Navbar className="color-nav" expand="lg" isAuthenticated={props.isAuthenticated} handleLogout={props.handleLogout}>
      <Navbar.Brand className="style-brand">
        <Link to="/"  className="style-brand" style={{color: "#FAFAD2", fontFamily:"'Anton', sans-serif", fontSize:"2.4rem"}}>Organizing for Change</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "#FAFAD2", lineHeight:"50px"}} />
      <Navbar.Collapse id="basic-navbar-nav" style={{color: "#FAFAD2", lineHeight:"50px"}}>
        <Nav className="mr-auto">
          {renderNavLink('/history', 'History of Inequality')}
          {props.isAuthenticated ?
            <>
              {renderNavLink('/EventMain', 'Events')}
              <Button className="style-link" variant="link" onClick={props.handleLogout} style={{color: "#CD4545", fontFamily:"'Anton', sans-serif", fontSize:"25px", lineHeight:"6px"}}>Logout</Button>
            </>
            :
            <>
              {renderNavLink('/sign-up', 'Sign-up', '#FAFAD2')}
              {renderNavLink('/login', 'Login')}
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>)
}

export default NavBar2;
