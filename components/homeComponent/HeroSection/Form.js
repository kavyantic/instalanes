import React from "react";

export default function Form() {
  return (
    <div className="w-full home_form h-full rounded-xl py-12 px-6 flex items-center">
      <div className="form_group">
        <div className="grid grid-cols-4 gap-6 mb-8">
            <button className='brand-btn col-span-2'>Repair</button>
            <button className='brand-btn-secondary col-span-2'>Protection Plan</button>
        </div>
        <form action="#" className='traplace'>
          <input type="text" name="mobile" id="mobile" autocomplete="off" placeholder='Enter Your Name' className='text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md' />
          <input type="text" name="mobile" id="mobile" autocomplete="off" placeholder='Enter Your Name' className='text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md' />
          <input type="text" name="mobile" id="mobile" autocomplete="off" placeholder='Enter Your Name' className='text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md' />
            <button className='brand-btn'>Get OTP
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
        </form>
      </div>
    </div>
  );
}
