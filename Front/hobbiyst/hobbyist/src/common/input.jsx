import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group  d-flex justify-content-center col-sm-5">
      <label htmlFor={name}>{label} </label>

      <input
        {...rest}
        name={name}
        autoFocus
        className="form-control"
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
