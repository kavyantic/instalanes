import React from 'react'
const WhyChoose = () => {
  return (
    <section className="whychoose mt-4 lg:mt-8">
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-3">
                   <div className="choose_card sm:p-8">
                      <div className="rounded-gray p-8 sm:p-10 md:p-4 lg:p-10 xl:p-14">
                        <img src="trust 2.webp" alt="" className='w-full'/>
                      </div>
                      <h4 className='text-center font-light mt-4 text-4xl'>Transperent work</h4>
                   </div>
                </div>
                <div className="col-span-6 md:col-span-3">
                   <div className="choose_card sm:p-8">
                      <div className="rounded-gray p-8 sm:p-10 md:p-4 lg:p-10 xl:p-14">
                        <img src="trust 1.webp" alt="" className='w-full'/>
                      </div>
                      <h4 className='text-center font-light mt-4 text-4xl'>Warranty on repairing</h4>
                   </div>
                </div>
                <div className="col-span-6 md:col-span-3">
                   <div className="choose_card sm:p-8">
                      <div className="rounded-gray p-8 sm:p-10 md:p-4 lg:p-10 xl:p-14">
                        <img src="trust 3.webp" alt="" className='w-full'/>
                      </div>
                      <h4 className='text-center font-light mt-4 text-4xl'>Certified Technician</h4>
                   </div>
                </div>
                <div className="col-span-6 md:col-span-3">
                   <div className="choose_card sm:p-8">
                      <div className="rounded-gray p-8 sm:p-10 md:p-4 lg:p-10 xl:p-14">
                        <img src="trust 4.webp" alt="" className='w-full'/>
                      </div>
                      <h4 className='text-center font-light mt-4 text-4xl'>Ouick Mobile Repairing</h4>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose