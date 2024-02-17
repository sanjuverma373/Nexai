import React, { useState } from 'react'
import Commonbtn from './Commonbtn';

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }

        { first ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden") }
        return (
                <div className='py-[38px]'>
                        <div className=' max-w-[1200px] px-3 mx-auto w-full'>
                                <div className=' flex items-center justify-between'>
                                        <span></span>
                                        <ul className={`  ${first ? "left-0" : "left-[-100%]"} flex items-center duration-300 justify-center gap-[20px] max-md:flex-col max-md:w-full max-md:h-full max-md:fixed max-md:top-0 max-md:z-20  max-md:bg-[url(./assets/images/webpimg/nav-bg.webp)] max-md:bg-black bg-center bg-cover bg-no-repeat ml-0 lg:ml-16`}>
                                                <li onClick={() => setfirst(false)} className=' text-white font-Poppins font-normal text-[16px] leading-[24px] after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-white'  ><a href="#home">Home</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-white font-Poppins font-normal text-[16px] leading-[24px] after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-white' ><a href="#marketplace">Marketplace</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-white font-Poppins font-normal text-[16px] leading-[24px] after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-white'><a href="#about">About</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-white font-Poppins font-normal text-[16px] leading-[24px] after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-white'><a href="#newchat">NexChat</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-white font-Poppins font-normal text-[16px] leading-[24px] after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-white' ><a href="#tokens">Tokens</a></li>
                                                <li onClick={() => setfirst(false)} className=' block md:hidden'><a href=""><Commonbtn text="Sign Up"/></a></li>
                                        </ul>
                                        <div className=' hidden md:block cursor-pointer'><Commonbtn text="Sign Up" /></div>
                                        <label className=" md:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white h-[3px] rounded-xl duration-300 w-6 "></span>
                                                                <span className="flex bg-white h-[3px] rounded-xl duration-300 w-6 my-1"></span>
                                                                <span className="flex bg-white h-[3px] rounded-xl duration-300 w-6 "></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>
                        </div>
                </div>
        )
}

export default Navsection
