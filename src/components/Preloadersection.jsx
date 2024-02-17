import React, { useEffect, useState } from 'react'

const Preloadersection = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
        return (
                <div className=" duration-300 w-screen h-screen bg-[black] fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                        <div className='flex items-center justify-center h-screen'>
                                <div className="flex items-center justify-center  flex-colum gap-6">
                                        <div className="loader animate-bounce aspect-square w-8 flex flex-col justify-center items-center">
                                                <h2 className=' cursor-pointer drop-shadow-[0px_1.337px_0px_#000] font-Recharge text-[64px] sm:text-[90px] font-normal text-white'><span className=' text-[#02CDCF]'>N</span>exai</h2>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Preloadersection
