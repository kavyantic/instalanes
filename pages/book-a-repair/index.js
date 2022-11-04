import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout'

export default function BookARepair() {
    return (
        <>
            <h2 className='font-light text-4xl text-darkLight mb-8'>Book a repair</h2>
            <div className="form_group">
                <div className="grid grid-cols-12 gap-4 mb-8">
                    <input type="text" className='text-white black-glass col-span-6 p-4 outline-none focus:outline-none rounded-md' />
                    <input type="text" className='text-white black-glass col-span-6 p-4 outline-none focus:outline-none rounded-md' />
                    <input type="text" className='text-white black-glass col-span-12 p-4 outline-none focus:outline-none rounded-md' />
                    <input type="text" className='text-white black-glass col-span-12 p-4 outline-none focus:outline-none rounded-md' />
                    <input type="text" className='text-white black-glass col-span-12 p-4 outline-none focus:outline-none rounded-md' />
                </div>
                <button className='brand-btn'>
                    Get OTP
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </>
    )
}

BookARepair.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}
