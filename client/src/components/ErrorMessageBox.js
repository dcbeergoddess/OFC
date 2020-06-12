import React from "react";

function ErrorMessageBox(props) {
  return (
    <div className="alert alert-dark" role="alert">
      {props.message}
    </div>
  )
}

export default ErrorMessageBox;