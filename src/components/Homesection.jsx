import React from 'react'
import homeimg from '../assets/images/webpimg/home-section-img.webp'
import Commonbtn from './Commonbtn'

const Homesection = () => {
  return (
    <div id='home' className=' pt-[40px] sm:pt-[80px] pb-[40px] sm:pb-[80px] md:pb-[120px] relative z-10 overflow-x-clip'>
      <div className=' max-w-[1180px] px-3 mx-auto w-full'>
        <div className=' grid lg:grid-cols-2 gap-6 sm:gap-[70px]'>
          <div className=' relative z-10'>
            <img className=' z-10' src={homeimg} alt="#" />
            <span className=' absolute bottom-16 left-0 blur-[200px] w-full max-w-[300px] h-[170px] bg-[#02CDCF] -z-10'></span>
          </div>
          <div className=' pt-6 sm:pt-[39px] pb-6 sm:pb-[72px]'>
            <h2 data-aos="zoom-in" className=' text-center lg:text-start font-Recharge font-bold text-[27px] sm:text-[40px] leading-[38px] sm:leading-[50px] text-[#02CDCF] pb-[16px]'>Ai-Powered Home Assistant</h2>
            <p data-aos="zoom-in" className=' text-center lg:text-start font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B4B4B4] pb-[6px] mx-auto lg:mx-0'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
            <p data-aos="zoom-in" className=' text-center lg:text-start font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B4B4B4] pb-[6px] max-w-[517px] mx-auto lg:mx-0'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
            <p data-aos="zoom-in" className=' text-center lg:text-start font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B4B4B4] pb-4 md:pb-[40px] max-w-[505px] mx-auto lg:mx-0'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
            <div data-aos="zoom-in" className='cursor-pointer justify-center lg:justify-start flex'><Commonbtn text="Learn More" /></div>
            <span className=' absolute right-[-10%] bottom-[40%] w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[140px] -z-10 '></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homesection
