import React from 'react'

import ErrorMessageBox from '../components/ErrorMessageBox'
import { Redirect } from 'react-router-dom'


function LoginForm(props) {
  return (<>
    {props.isAuthenticated &&
      <Redirect to="/" />
    }

    <div className="row mb-3 mt-5">
      <div className="col-12 col-md-6 offset-md-3">
        <h1 className="text-center mb-4">Log In</h1>
        <form className="form-group" onSubmit={props.onSubmit}>
          <div className="form-group row">
            <label htmlFor="username" className="col-4 col-form-label">Username:</label>
            <input
              name="username"
              type="text"
              autoComplete="off"
              className="form-control col-8"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-4 col-form-label">Password:</label>
            <input
              name="password"
              type="password"
              autoComplete="off"
              className="form-control col-8"
            />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        {props.errorMessage &&
          <ErrorMessageBox message={props.errorMessage}/>}

      </div>
    </div>
  </>)
}

export default LoginForm