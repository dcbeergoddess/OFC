import React from "react";

function ErrorMessageBox(props) {
  return (
    <div className="alert alert-primary" role="alert">
      {props.message}
    </div>
  )
}

export default ErrorMessageBox;