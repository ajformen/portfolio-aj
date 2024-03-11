"use client";

import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                {/* text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ---- from-blue-400 to-green-600 */}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>
                        Hello, I{`'`}m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        "Adeliso",
                        1000,
                        "Web Developer",
                        1000,
                        "Mobile Developer",
                        1000,
                        "Fullstack Developer",
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Driven by innovation and fueled by passion, I thrive in dynamic environments where creativity meets strategic problem-solving.
                    {/* A motivated individual with a keen interest in software programs, looking to leverage
                    my experience building responsive and scalable applications to solve interesting
                    problems that delight end-users. */}
                </p>
                {/* <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br from-gray-500 via-blue-500 to-green-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-500 via-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div> */}
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
                    <Image
                        src="/images/ss-me2.png"
                        alt="hero image"
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection