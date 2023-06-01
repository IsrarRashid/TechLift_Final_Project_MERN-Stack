import React from "react";

const Input = ({
  divClassName = "form-floating mb-3",
  type = "text",
  label,
  value,
  onChange,
  id,
  placeholder,
}) => {
  return (
    <div className={divClassName}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
