import React from 'react'
import Navsection from './Navsection'
import Commonbtn from './Commonbtn'
import headershadow from '../assets/images/webpimg/header-shadow.webp'

const Headersection = () => {
        return (
                <div className='relative'>
                        <div className='lg:px-[30px] lg:pt-[10px] pb-0 sm:pb-[55px]'>
                                <div className='bg-[url(./assets/images/webpimg/header-bg.webp)] bg-no-repeat bg-center lg:bg-size min-h-screen lg:min-h-[810px]  overflow-x-clip lg:mt-[0] '>
                                        <Navsection />
                                        <div className=' max-w-[1140px] mx-auto px-3 w-full'>
                                                <div className=' min-h-[355px] pt-[35px] sm:pt-[104px] relative z-10'>
                                                        <span className=' absolute left-[-11%] top-[-1%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[200px] '></span>
                                                        <h2 className=' mt-4 pb-[16px] font-Recharge font-bold text-[37px] sm:text-[45px] md:text-[60px] leading-[43px] sm:leading-[75px] text-white max-w-[577px] '><span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h2>
                                                        <p className=' pb-[51px] font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B2B5B6]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                                                        <div className=' flex'>
                                                                <div className='cursor-pointer'><Commonbtn text="Know More" /></div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <img className=' absolute bottom-0 w-full mx-auto z-10' src={headershadow} alt="headershadow" />
                </div>
        )
}

export default Headersection
