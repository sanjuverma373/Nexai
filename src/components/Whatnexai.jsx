import React from 'react'
import whatai from '../assets/images/webpimg/what-ai-img.webp'
import Commonbtn from './Commonbtn'

const Whatnexai = () => {
        return (
                <div className=' pt-[40px] sm:pt-[80px] md:pt-[160px] px-3 sm:px-[50px]'>
                        <div className=' bg-[url(./assets/images/webpimg/what-section-bg-img.webp)] bg-cover bg-center rounded-[24px] border border-white lg:bg-size bg-no-repeat relative z-10 overflow-hidden'>
                                <div className=' py-[24px] sm:py-[60px] md:py-[120px] xl:py-[163px] px-[10px] sm:px-[30px] md:px-[50px] lg:px-[100px] mx-auto w-full'>
                                        <div className=' grid xl:grid-cols-2 gap-2 sm:gap-[24px]'>
                                                <div className=' order-2 xl:order-1 flex flex-col justify-center'>
                                                        <h3 className='font-Recharge font-bold text-[25px] sm:text-[50px] leading-[38px] sm:leading-[50px] text-[#02CDCF] text-center xl:text-start pb-[16px]'>What is NexAi?</h3>
                                                        <p className='  font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B7B7B7] max-w-[561px] mx-auto xl:mx-0 pb-2 text-center xl:text-start'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                                                        <p className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B7B7B7]  max-w-[561px] mx-auto xl:mx-0 pb-[24px] sm:pb-[40px] text-center xl:text-start '>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                                                        <div className=' flex justify-center xl:justify-start cursor-pointer'><Commonbtn text="Learn More" /></div>
                                                </div>
                                                <div className=' relative order-1 xl:order-2 flex justify-center '>
                                                        <img data-aos="flip-left"
                                                                data-aos-easing="ease-out-cubic"
                                                                data-aos-duration="2000"
                                                         className=' mix-blend-color-dodge relative object-fit-xl-cover ' src={whatai} alt="#" />
                                                        <span className=' absolute top-[9%]  right-[10%] w-full max-w-[380px] min-h-[380px] rounded-[500px] bg-[#02CDCF] blur-[470px] -z-10'></span>
                                                </div>
                                        </div>
                                </div>
                                <span className=' -z-10 absolute top-[9%]  right-[10%] w-[468px] h-[463px] rounded-[500px] bg-[#02CDCF] blur-[400px]'></span>
                                <span className=' absolute left-0 bottom-0 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[150px] '></span>

                        </div>
                </div>
        )
}

export default Whatnexai
