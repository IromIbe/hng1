import React from "react";
import "./contact_me.css";

function Input({
  label,
  placeholder,
  value,
  id,
  type,
  name,
  handleChange,
  error,
}) {
  return (
    <>
      <label
        className='w-full flex flex-col font-medium text-sm text-[#344054] py-[14px]'
        htmlFor={id}
      >
        {label}
        <input
          className={`field ${error ? "error" : ""}`}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />

        {error && (
          <span className='text-[#F83F23] font-normal  text-[14px] mx-2 mt-1'>
            {error}
          </span>
        )}
      </label>
    </>
  );
}

export default Input;
