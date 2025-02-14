import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-[1px] border-b-[1px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img className='w-30 h-12' src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
        </div>
  )
}

export default Stripe