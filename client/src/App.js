import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import EventMain from "./pages/EventMain";
import EventDetail from "./pages/EventDetail";
import AddEvent from "./pages/AddEvent";
import AddComment from "./pages/AddComment";
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import API from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar2 from './components/NavBar/NavBar'



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({
    name: "",
    _id: ""
  })
  const [errorMessage, setErrorMessage] = useState("")
  const [eventCount, setEventCount] = useState(0)

  const showMessage = (message, timeout = 3000) => {
    setErrorMessage(message)

    if (timeout !== 0) {
      setInterval(() => setErrorMessage(""), timeout);
    }
  }

//  const location = useLocation()


  const logonUser = event => {
    event.preventDefault()

    const form = event.target
    const credentials = {
      username: form.username.value,
      password: form.password.value
    }

    API.logonUser(credentials)
      .then(result => {
        console.log(result)
        if (result.data.status === 'success') {
          setIsAuthenticated(true)
          setUser(result.data.data)
        } else {
          showMessage(result.data.message)
        }
      })
      .catch(error => {
        console.log(error)
        showMessage(error.message)
      })
  }

  const handleLogout = event => {
    event.preventDefault()

    setIsAuthenticated(false)
    setUser("")

  }

  return (
    <Router>
      <div>
        <Navbar2 isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>

        {/* react router is responding to what the path is */}
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/EventMain" render={props =>
          <EventMain {...props}
            user={user}
            isAuthenticated={isAuthenticated}
            setEventCount={setEventCount} />
        } />
        <Route path="/EventDetail" component={EventDetail} />
        <Route path="/AddEvent" render={props =>
          <AddEvent {...props}
            user={user}
            isAuthenticated={isAuthenticated}
            setEventCount={setEventCount} />
        } />
        <Route path="/AddComment" component={AddComment} />
        <Route path="/sign-up" render={props =>
          <RegisterForm {...props}
            errorMessage={errorMessage}
            showMessage={showMessage}
            isAuthenticated={isAuthenticated} />
        } />

        <Route path="/login" render={props =>
          <LoginForm {...props}
            onSubmit={logonUser}
            errorMessage={errorMessage}
            isAuthenticated={isAuthenticated} />
        } />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
