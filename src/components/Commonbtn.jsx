import React from 'react'

const Commonbtn = (props) => {
  return (
    <>
      <div className={`${props.custom} duration-500 start_btn py-[12px] sm:py-[18px] px-[20px] sm:px-[32px] bg-[#02CDCF] rounded-xl font-bold text-[15px] sm:text-[18px] leading-[21px] font-Recharge border border-transparent hover:text-[#02CDCF] hover:bg-[black] hover:border hover:border-[#02CDCF] hover:scale-105 cursor-pointer `}>{props.text}</div>
    </>
  )
}

export default Commonbtn