import React, { useState } from "react";
import "./contact_me.css";
import Input from "./input";

function ContactPg() {
  // state managing contact information of the user
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { firstName, lastName, email, message } = contactInfo;

  //  storing an error state for info given by user
  const [contactError, setContactError] = useState({});

  // handling each input field change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // function for validating input fields
  const validation = (values) => {
    let errors = {};
    // checking for error in first_name input
    if (!values.firstName) {
      errors.firstName = "Please enter your first name";
    }
    // checking for error in last_name input
    if (!values.lastName) {
      errors.lastName = "Please enter your last name";
    }
    // checking for error in email input
    if (!values.email) {
      errors.email = "Please enter a valid email address";
    }
    // checking for error in message textarea
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  // controlling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactError(validation(contactInfo));
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
          <div className='name flex xsm:flex-row xsm:gap-4 flex-col justify-between items-start'>
            <Input
              label='First name'
              placeholder='Enter your first name'
              name='firstName'
              id='first_name'
              type='text'
              value={firstName}
              handleChange={handleChange}
              error={contactError.firstName}
            />

            <Input
              label='Last name'
              placeholder='Enter your last name'
              name='lastName'
              id='last_name'
              type='text'
              value={lastName}
              handleChange={handleChange}
              error={contactError.lastName}
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
            error={contactError.email}
          />

          <label
            htmlFor='message'
            className='w-full flex flex-col font-medium text-sm text-[#344054] pt-[14px]'
          >
            Message
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='6'
              value={message}
              onChange={handleChange}
              className={`field ${contactError.message ? "error" : ""}`}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            {contactError.message && (
              <span className='text-[#F83F23] font-normal  peer-invalid:block  text-[14px] mx-2 mt-2'>
                {contactError.message}
              </span>
            )}
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
              You agree to providing your data to Irommy who may contact you.
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
