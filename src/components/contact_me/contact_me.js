import React, { useState } from "react";
import "./contact_me.css";
import Input from "./input";

function ContactPg() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = contactInfo;

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact_cont lg:w-[70%] md:w-[85%] xsm:w-full w-[98%]  m-[auto] mt-[60px]'>
      <div className='flex flex-col justify-start items-start'>
        <div className='heading'>
          <h1 className='text-[#101828] font-bold tracking-tight text-4xl mb-3'>
            Contact Me
          </h1>
          <p className='font-[400] md:text-xl text-lg text-[#475467]'>
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form action='' className='w-full pt-6 pb-32' onSubmit={handleSubmit}>
          <div className='name flex xsm:flex-row xsm:gap-4 flex-col justify-between items-end'>
            <Input
              label='First name'
              placeholder='Enter your first name'
              name='firstName'
              id='first_name'
              type='text'
              value={firstName}
              handleChange={handleChange}
            />

            <Input
              label='Last name'
              placeholder='Enter your last name'
              name='lastName'
              id='last_name'
              type='text'
              value={lastName}
              handleChange={handleChange}
            />
          </div>

          <Input
            label='Email'
            placeholder='yourname@email.com'
            name='email'
            id='email'
            type='email'
            value={email}
            handleChange={handleChange}
          />

          <label
            htmlFor='message'
            className='w-full flex flex-col font-medium text-sm text-[#344054] py-[14px]'
          >
            Message
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='6'
              value={message}
              onChange={handleChange}
              className='field'
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </label>
          <div className='mt-2'>
            <input
              type='checkbox'
              name='checkbox'
              id='checkbox_id'
              value='value'
              className='border-1 border-[#D0D5DD] rounded-md'
            />
            <span className='ml-[5px] text-[#475467] text-[15px] font-normal'>
              You agree to providing your data to ZURI who may contact you.
            </span>
          </div>
          <button
            id='btn__submit'
            className='border-1 bg-[#1570EF] hover:bg-[#175CD3]  border-[#1570EF] hover:border-[#175CD3] focus:border-[#1570EF] focus:bg-[#1570EF] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)] mt-12 text-white font-[600] text-base flex justify-center items-center rounded-lg border-1 border-[ #1570EF] w-full p-2'
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPg;
