import React from "react";
import "./contact_me.css";
function ContactPg() {
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
        <form action='' className='w-full pt-4 pb-32'>
          <div className='name flex xsm:flex-row flex-col justify-between items-center'>
            <label htmlFor='first_name' className='mr-2'>
              First Name
              <input type='text' id='first_name' className='field' />
            </label>
            <label htmlFor='last_name' className='ml-2'>
              Last Name
              <input type='text' id='last_name' className='field' />
            </label>
          </div>
          <label htmlFor='email'>
            {" "}
            Email
            <input type='email' name='' id='email' className='field' />
          </label>
          <label htmlFor='message'>
            Message
            <textarea
              name=''
              id='message'
              cols='30'
              rows='10'
              className='field'
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
            <span className='ml-[5px] text-[#475467] text-base font-normal'>
              You agree to providing your data to ZURI who may contact you.
            </span>
          </div>
          <button
            id='btn__submit'
            className='bg-[#1570EF] mt-12 text-white font-[600] text-base flex justify-center items-center rounded-lg border-1 border-[ #1570EF] w-full p-2'
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPg;
