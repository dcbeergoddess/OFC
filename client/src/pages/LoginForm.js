import React from 'react'
import ErrorMessageBox from '../components/ErrorMessageBox'
import { Redirect } from 'react-router-dom'
import "./LoginForm.css"


function LoginForm(props) {
  return (<>
    {props.isAuthenticated &&
      <Redirect to="/EventMain" />
    }
    <div className="container-fluid">
      <div className="row mb-3 mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Log In</h1>
          <div className="px-3">
          <form className="form-group" onSubmit={props.onSubmit}>
            <div className="form-group row">
              <label htmlFor="username" className="col-12 col-md-4 col-form-label pl-0">Username:</label>
              <input
                name="username"
                type="text"
                autoComplete="off"
                className="form-control col-12 col-md-8"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-12 col-md-4 col-form-label pl-0">Password:</label>
              <input
                name="password"
                type="password"
                autoComplete="off"
                className="form-control col-12 col-md-8"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-lg btn-dark btn-block">Log In</button>
            </div>
          </form>
          </div>
          {props.errorMessage &&
            <ErrorMessageBox message={props.errorMessage}/>}
        </div>
      </div>
    </div>
  </>)
}

export default LoginForm