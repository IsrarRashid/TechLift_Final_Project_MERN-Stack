import React from "react";

const TextArea = ({
  name,
  value,
  onChange,
  id,
  boxHeight,
  placeholder = "Leave a comment here",
}) => {
  return (
    <div className="form-floating mb-3">
      <textarea
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
        id={id}
        style={{ height: boxHeight }}
      ></textarea>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default TextArea;
