import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'


function NavBar2(props) {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation()

  const renderNavLink = (path, text) =>
    <Nav.Link>
      <Link to={path} className={location.pathname === {path} ? "nav-link active" : "nav-link"}>
        {text}
      </Link>
    </Nav.Link>


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand><Link to="/" className="navbar-brand">Organizing for Change</Link></Navbar.Brand>
      <div className="ml-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto" />
      </div>
      <div>
        <Navbar.Collapse id="basic-navbar-nav navbar-right">
          <Nav className="nav-bar nav">
            {renderNavLink('/history', 'A History of Inequality')}
            {props.isAuthenticated ?
              <>
                {renderNavLink('/EventMain', 'Events')}
                <Nav.Link>
                  <Link onClick={props.handleLogout} className="nav-link"> Logout</Link>
                </Nav.Link>
              </>
              :
              <>
                {renderNavLink('/sign-up', 'Sign-up')}
                {renderNavLink('/login', 'Login')}
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar2;
