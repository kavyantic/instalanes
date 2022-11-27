import React from 'react'
import Link from 'next/link'
import Lottie from 'react-lottie';
import lottieAnimation from "/public/under-construction.json"
export default function index() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="container py-8">
      <div className="grid grid-cols-8 gap-6 place-items-center">
        <div className="col-span-8 lg:col-span-4 xl:col-span-3">
          <h1 className="brand-heading text-center lg:text-left mb-6">page under <span>construction!</span></h1>
          <p className='text-secondary text-xl mb-6 text-center lg:text-left'>For Screen Protection Download Our App</p>
          <a href="https://play.google.com/store/apps/details?id=com.app.devicecure">
            <img src="/googleplay.png" alt="" className='max-w-[300px] w-4/5 mx-auto lg:mx-0' />
          </a>
          <div className="flex justify-center lg:justify-start">
            <Link href="/" >
              <button className="brand-btn mt-6">Go Back</button>
            </Link>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-4 xl:col-span-5">
          <Lottie
            options={defaultOptions}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  )
}
