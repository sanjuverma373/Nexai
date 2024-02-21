import React from 'react'
import unicel from '../assets/images/png/unicelayer.png'
import { Linecicon, Msgicon, Timeadd, Timeset } from './Icons'

const Featuressection = () => {
  return (
    <div id='about' className=' px-3 sm:px-[50px]'>
      <div className=' border border-[#FCFCFC] rounded-[24px] relative  overflow-x-clip min-h-[] lg:min-h-[810px] h-full '>
        <h2 data-aos="zoom-in" className=' font-Recharge font-bold text-[25px] sm:text-[50px] leading-[38px] sm:leading-[50px] text-white text-center pt-[24px] sm:pt-[80px] pb-[16px]'>Unique features</h2>
        <p data-aos="zoom-in" className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B7B7B7] text-center max-w-[397px] mx-auto pb-[24px] sm:pb-[80px]'>ability to engage in natural, fluent conversations in over 15 languages,</p>
        <div className='max-w-[1240px] px-3 mx-auto w-full'>
          <div className='flex flex-col items-center justify-center bg-[url(./assets/images/png/unice-img.png)] relative bg-center bg-no-repeat w-full'>
            <img className=' absolute   rounded-full flex items-center justify-center mix-blend-hue' src={unicel} alt="#" />
            <div className=' overflow-y-scroll my-scroll-bar h-[530px] w-full'>
              <div className=' grid lg:grid-cols-2 relative z-10 '>
                <div className=' flex flex-col'>
                  <div className=' bg-white px-4 sm:px-6 pt-[16px] sm:pt-[30px] pb-[16px] sm:pb-[44px] rounded-[16px] max-w-[364px] hover:scale-90 duration-300'>
                    <span><Timeset /></span>
                    <h3 className=' pt-[16px] sm:pt-[30px] font-Recharge font-bold text-[18px] sm:text-[20px] leading-[32px] pb-[10px]'>Remote Access and File Management</h3>
                    <p className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] max-w-[316px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                  </div>
                </div>
                <div className=' flex flex-col justify-end items-end mt-[24px] lg:mt-[270px] '>
                  <div className=' bg-white px-4 sm:px-6 pt-[16px] sm:pt-[30px] pb-[16px] sm:pb-[44px] rounded-[16px] max-w-[364px] hover:scale-90 duration-300'>
                    <span><Timeadd /></span>
                    <h3 className=' pt-[16px] sm:pt-[30px] font-Recharge font-bold text-[18px] sm:text-[20px] pb-[10px] leading-[32px]'>Real-time Home Monitoring</h3>
                    <p className='font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] max-w-[316px]'>While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
                  </div>
                </div>

              </div>
              <div className=' grid lg:grid-cols-2 relative z-10 w-full'>
                <div className=' flex flex-col'>
                  <div className=' bg-white px-4 sm:px-6 pt-[16px] sm:pt-[30px] pb-[16px] sm:pb-[44px] rounded-[16px] max-w-[364px] hover:scale-90 duration-300 mt-6'>
                    <span><Msgicon/></span>
                    <h3 className='pt-[16px] sm:pt-[30px] font-Recharge font-bold text-[18px] sm:text-[20px] leading-[32px] pb-[10px]'>Remote Access and File Management</h3>
                    <p className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] max-w-[316px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                  </div>
                </div>
                <div className=' flex flex-col justify-end items-end pb-6 lg:pb-0 lg:pt-0 mt-[24px] lg:mt-[200px] '>
                  <div className=' bg-white px-4 sm:px-6 pt-[16px] sm:pt-[30px] pb-[16px] sm:pb-[44px] rounded-[16px] max-w-[364px] hover:scale-90 duration-300'>
                    <span><Linecicon/></span>
                    <h3 className='pt-[16px] sm:pt-[30px] font-Recharge font-bold text-[18px] sm:text-[20px] leading-[32px] pb-[10px]'>Real-time Home Monitoring</h3>
                    <p className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] max-w-[316px]'>While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className=' max-w-[262px] w-full absolute bottom-10 max-lg:-z-10  left-[-20%] blur-[200px] bg-[#02CDCF] max-h-[262px] h-full'></span>
        <span className=' max-w-[262px] w-full absolute top-[30%] max-lg:-z-10  right-[-20%] blur-[200px] bg-[#02CDCF] max-h-[262px] h-full'></span>
      </div>      
    </div>
  )
}

export default Featuressection
