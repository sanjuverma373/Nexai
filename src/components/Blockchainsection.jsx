import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import startelips from '../assets/images/webpimg/start-sectioni-elips.webp'


const Blockchainsection = () => {
        const settings = {
                dots: false,
                arrows: false,
                infinite: true,
                speed: 3000,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: true,
                autoplay: true,
                autoplaySpeed: 0,
                css: 'ease',

                responsive: [
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
                <div id='nexchat'  className=' pt-[40px] sm:pt-[80px] md:pt-[160px] overflow-x-clip relative z-10'>
                        <span className=' absolute left-[-6%] top-[30%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[150px] '></span>
                        <span className=' absolute right-[-10%] top-[15%] -z-10 w-full h-full max-w-[100px] sm:max-w-[120px] md:max-w-[228px] max-h-[100px] sm:max-h-[120px] md:max-h-[228px] bg-[#02CDCF] rounded-full blur-[140px] '></span>
                        <img className=' absolute right-0 top-0' src={startelips} alt="startelips" />
                        <h3 data-aos="zoom-in" className='font-Recharge font-bold text-[25px] sm:text-[50px] leading-[38px] sm:leading-[50px] text-[#02CDCF] pb-[16px] text-center'>Blockchain & AI technology</h3>
                        <p data-aos="zoom-in" className=' font-Poppins font-normal text-[13px] sm:text-[16px] leading-[21px] sm:leading-[25px] text-[#B7B7B7] text-center max-w-[997px] mx-auto pb-[30px] sm:pb-[96px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                        <h3 data-aos="zoom-in" className=' font-Recharge font-bold text-[16px] sm:text-[20px] leading-[32px] text-white max-w-[684px] text-center mx-auto pb-[24px] sm:pb-[60px]'>By building the software on blockchain, Nexai provides the following advantages</h3>
                        <div className=' max-w-[1240px] ms-auto px-3 w-full'>
                                <Slider {...settings} className='block'>
                                        <div className='flex'>
                                                <div className='bg-[url(./assets/images/webpimg/slider1-box.webp)] bg-no-repeat bg-size pt-[70px] sm:pt-[70px] pb-[90px] sm:pb-[125px] md:pb-[145px] px-[61px] sm:px-[77px] flex flex-col justify-center items-center'>
                                                        <div className='w-[58px] h-[58px] pt-[2px] shadow-[0_4px_16px_0_#02CDCF99_inset] bg-black rounded-full'>
                                                                <p className='  font-Recharge font-bold text-[26px] sm:text-[32px] leading-[51px] text-center text-white'>1</p>
                                                        </div>
                                                        <p className=' font-Recharge font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Security and Privacy</p>
                                                </div>
                                        </div>
                                        <div className='flex mt-[50px] sm:mt-[111px]'>
                                                <div className='bg-[url(./assets/images/webpimg/slider1-box.webp)] bg-no-repeat bg-size pt-[50px] sm:pt-[70px] pb-[85px] sm:pb-[111px] px-[70px] sm:px-[77px] flex flex-col justify-center items-center'>
                                                        <div className='w-[58px] h-[58px] pt-[2px] shadow-[0_4px_16px_0_#02CDCF99_inset] bg-black rounded-full'>
                                                                <p className='  font-Recharge font-bold text-[26px] sm:text-[32px] leading-[51px] text-center text-white'>2</p>
                                                        </div>
                                                        <p className=' font-Recharge font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Transparent and Reliable Data Management</p>
                                                </div>
                                        </div>
                                        <div className='flex'>
                                                <div className='bg-[url(./assets/images/webpimg/slider1-box.webp)] bg-no-repeat bg-size pt-[50px] sm:pt-[70px] pb-[125px] sm:pb-[145px] px-[52px] sm:px-[77px] flex flex-col justify-center items-center'>
                                                        <div className='w-[58px] h-[58px] pt-[2px] shadow-[0_4px_16px_0_#02CDCF99_inset] bg-black rounded-full'>
                                                                <p className='  font-Recharge font-bold text-[26px] sm:text-[32px] leading-[51px] text-center text-white'>3</p>
                                                        </div>
                                                        <p className=' font-Recharge font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Self-learning and Personalization</p>
                                                </div>
                                        </div>
                                        <div className='flex mt-[50px] sm:mt-[111px]'>
                                                <div className='bg-[url(./assets/images/webpimg/slider1-box.webp)] bg-no-repeat bg-size pt-[50px] sm:pt-[70px] pb-[125px] sm:pb-[145px] px-[70px] sm:px-[77px] flex flex-col justify-center items-center'>
                                                        <div className='w-[58px] h-[58px] pt-[2px] shadow-[0_4px_16px_0_#02CDCF99_inset] bg-black rounded-full'>
                                                                <p className='  font-Recharge font-bold text-[26px] sm:text-[32px] leading-[51px] text-center text-white'>4</p>
                                                        </div>
                                                        <p className=' font-Recharge font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Self-learning and Personalization</p>
                                                </div>
                                        </div>
                                </Slider>
                        </div>
                </div>
        )
}

export default Blockchainsection
