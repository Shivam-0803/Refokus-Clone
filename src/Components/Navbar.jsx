import React from 'react'
import Button from './Button'

function Navbar () {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-1 border-zinc-700'>
        {/* <img src="" alt="" /> */}
        <div className='nleft flex items-center'>
        <h1 className='text-white'>Refokus</h1>
        <div className='links flex gap-14 ml-25' >
            {["Home" , "Work" , "Culture" ,"", "News"].map((elem , index)=> 
            (
                elem.length===0 ? <span className='w-[2px] h-7 bg-zinc-700'></span> :(<a className='text-white font-medium font-text-sm flex items-center gap-1'  href='#'>
                    {index===1 ?(<span style={{boxShadow:"0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-400 rounded-full'></span>) :null}  
                      {elem}
                      </a>)
            )
            )}
        </div>
        </div>
        <Button/> 
    </div>
  )
}

export default Navbar