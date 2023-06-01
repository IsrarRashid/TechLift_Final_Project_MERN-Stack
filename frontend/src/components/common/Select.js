import React from "react";

const Select = ({ name, id, value, onChange, options }) => {
  return (
    <div className="form-floating mb-3">
      <select
        className="form-select"
        id={id}
        aria-label="Floating label select example"
        value={value}
        onChange={onChange}
      >
        <option defaultValue>Select an Activity Type</option>
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default Select;
