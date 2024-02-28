import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderelips from '../assets/images/webpimg/sliders-section-elips.webp'

const Sliderssection = () => {
        const settinges = {
                dots: false,
                arrows: false,
                infinite: true,
                speed: 3000,
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding:true,
                autoplay:true,
                autoplaySpeed:0,
                css: 'ease',
                
                responsive: [
                        {
                                breakpoint: 1524,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false
                                }
                        },
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false
                                }
                        },
                        {
                                breakpoint: 790,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        initialSlide: 1
                                }
                        }
                ]
        };
        const settinges2 = {
                dots: false,
                arrows: false,
                infinite: true,
                speed: 3000,
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding:true,
                autoplay:true,
                autoplaySpeed:0,
                css: 'ease',
                rtl: true,
                responsive: [
                        {
                                breakpoint: 1524,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false
                                }
                        },
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false
                                }
                        },
                        {
                                breakpoint: 790,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        initialSlide: 1
                                }
                        }
                ]
        };
        return (
                <div id='marketplace' className=' pt-[40px] sm:pt-[80px] md:pt-[150px] lg:pt-[200px] relative overflow-x-clip z-10'>
                        <span className=' absolute right-[-10%] top-[5%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[140px] '></span>
                        <img className=' absolute -z-10 top-3 left-0' src={sliderelips} alt="sliderelips" />                        
                        <h3 data-aos="zoom-in" className='font-Recharge font-bold text-[25px] sm:text-[40px] leading-[38px] sm:leading-[50px] text-[#02CDCF] pb-[16px] text-center px-3'>NexAi does all this. And more.</h3>
                        <p data-aos="zoom-in" className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B7B7B7] text-center max-w-[923px] mx-auto pb-[40px] sm:pb-[90px] px-3'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                        <Slider className=' mb-[40px] px-3 slider3' {...settinges}>                                
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer'>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, set alarm of 5:00 am</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, measure this table</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, is the front door locked?</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn off light</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Switch of fan</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on TV</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn of AC.</h3>
                                        </div>
                                        <div className='rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Lock the front door</h3>
                                        </div>
                        </Slider>
                        <Slider className=' mb-[40px] px-3 slider3' {...settinges2}>                                
                                        <div className='  rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, set alarm of 5:00 am</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, measure this table</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, is the front door locked?</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn off light</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Switch of fan</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on TV</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn of AC.</h3>
                                        </div>
                                        <div className=' rounded-[16px] px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Lock the front door</h3>
                                        </div>
                        </Slider>
                        <Slider className=' mb-[40px] px-3 slider3' {...settinges}>                                
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px]  rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, set alarm of 5:00 am</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, measure this table</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on light</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, is the front door locked?</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn off light</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Switch of fan</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on TV</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn on music</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Turn of AC.</h3>
                                        </div>
                                        <div className='px-[23px] sm:px-[43px] py-[33px] sm:py-[43px] md:py-[53px] rounded-[16px] shadow-[0_4px_16px_0_#02CDCF99] duration-300 hover:scale-105 cursor-pointer '>
                                                <h3 className=' font-Recharge font-bold text-[18px] sm:text-[24px] leading-[38px] text-white text-center max-w-[240px] mx-auto'>NexAi, Lock the front door</h3>
                                        </div>
                        </Slider>

                </div>
        )
}

export default Sliderssection
