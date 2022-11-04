import React from "react";
import "./contact_me.css";

function Input({ label, placeholder, value, id, type, name, handleChange }) {
  return (
    <label
      className='w-full flex flex-col font-medium text-sm text-[#344054] py-[14px]'
      htmlFor={id}
    >
      {label}
      <input
        className='field'
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default Input;
