import React from 'react'
import Commonbtn from './Commonbtn'
import startelips from '../assets/images/webpimg/start-sectioni-elips.webp'

const Startedsection = () => {
        return (
                <div className=' pt-[40px] sm:pt-[80px] md:pt-[150px] lg:pt-[248px] pb-[24px] sm:pb-[89px] relative z-10 overflow-x-clip '>
                        <div className=' max-w-[1140px] px-3 mx-auto w-full'>
                                <div className=' lg:flex items-center  justify-between'>
                                        <h3 data-aos="zoom-in-up"  className=' font-Recharge font-bold text-[27px] sm:text-[34px] md:text-[40px] leading-[38px] sm:leading-[52px] text-white max-w-[517px] text-center lg:text-start mx-auto lg:mx-0'>Ready to get started <span className=' text-[#02CDCF]'>Talk to us Today</span> </h3>
                                        <div data-aos="zoom-in-up"  className=' flex justify-center lg:justify-start pt-4 lg:pt-0'><Commonbtn text="Get Started"/></div>
                                </div>
                        </div>
                        <span className=' absolute left-[-10%] top-[30%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[150px] '></span>
                        <span className=' absolute right-[-10%] -bottom-[5%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[140px] '></span>
                        <img className=' absolute right-0 top-[30%]' src={startelips} alt="startelips" />
                </div>
        )
}

export default Startedsection
