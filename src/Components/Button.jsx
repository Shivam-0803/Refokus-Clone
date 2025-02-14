import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title ="Get Started"}) => {
  return (
    <div className='max-w-40 px-4 py-2 rounded-full text-black bg-zinc-100 flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button