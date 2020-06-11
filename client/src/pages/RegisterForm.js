import React from 'react'

import ErrorMessageBox from '../components/ErrorMessageBox'
import { Redirect } from 'react-router-dom'


function RegisterForm(props) {

  const matchPasswords = event => {

    const registerForm = document.forms.namedItem('register')
    const password = registerForm.password.value.length,
      confirmpassword = registerForm['confirm-password'].value.length

    if (password !== confirmpassword) {
      props.showMessage("passwords must match",0)
    } else {
      props.showMessage("",0)
    }
  }

  return (<>
    {props.isAuthenticated &&
      <Redirect to="/" />
    }
<div className="form">
    <div className="row mb-3 mt-5">
      <div className="col-12 col-md-6 offset-md-3">
        <h1 className="text-center mb-4">Register</h1>
        <form className="form-group" onSubmit={props.onSubmit} name='register'>
          <div className="form-group row">
            <label htmlFor="username" className="col-12 col-md-4 col-form-label">Username:</label>
            <input
              name="username"
              type="text"
              autoComplete="off"
              className="form-control col-12 col-md-8"
              placeholder="Enter a Username"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-12 col-md-4 col-form-label">Password:</label>
            <input
              name="password"
              type="password"
              autoComplete="off"
              className="form-control col-12 col-md-8"
              placeholder="Enter a Password"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="confirm-password" className="col-12 col-md-4 col-form-label">Confirm Password:</label>
            <input
              name="confirm-password"
              type="password"
              onChange={matchPasswords}
              autoComplete="off"
              className="form-control col-12 col-md-8"
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="btn btn-lg btn-dark btn-block">Register</button>
        </form>
        {props.errorMessage &&
          <ErrorMessageBox message={props.errorMessage}/>}
</div>
      </div>
    </div>
  </>)
}

export default RegisterForm