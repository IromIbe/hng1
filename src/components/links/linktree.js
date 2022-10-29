import React from "react";
import linkData from "../linksData";

function LinkTree() {
  return (
    <div className='main flex flex-col justify-center items-center'>
      <div className=' relative py-5  w-full'>
        <div className='profile flex flex-col justify-center items-center'>
          <img
            src='/irom.svg'
            alt=''
            id='profile__img'
            className='rounded-[50%] mb-5 hover:bg-blend-overlay'
          />
          <span id='twitter' className='text-[20px] font-bold leading-8'>
            Asan
          </span>
          <span id='slack' className='hidden'>
            Irommy
          </span>
        </div>

        <div className='share absolute top-0 sm:right-[10%] md:right-[20%] sm:block hidden'>
          <img
            src='/share.svg'
            alt=''
            className='p-[10px] border-[2px] border-dotted border-gray-300 rounded-[50%] hover:bg-[#F9FAFB]'
          />
        </div>
        <div className='share absolute top-0 right-[4%] sm:hidden block'>
          <img
            src='/dots.svg'
            alt=''
            className='p-[10px] border-[2px] border-dotted border-gray-300 rounded-[50%] hover:bg-[#F9FAFB]'
          />
        </div>
      </div>
      <div className='links md:px-16 sm:px-12 xsm:px-2 px-2 w-full mt-8 text-[#101828] font-medium text-lg'>
        {linkData.map((link) => (
          <a
            href={link.linkTo}
            id={link.id}
            className='block w-full text-center text-[#101828] font-medium sm:text-lg xsm:text-base text-sm py-[22px] mb-5 bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg border-1 border-[ #EAECF0]'
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinkTree;
