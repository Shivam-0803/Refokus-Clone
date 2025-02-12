import React from 'react'

const Work = () => {

    var images = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp" , top:"50%" , left:"50%" , isactive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203.webp" , top:"56%" , left:"44%" , isactive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-500.webp" , top:"45%" , left:"56%" , isactive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203.webp" , top:"60%" , left:"53%" , isactive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86ccd1552e692874437_Arqitel%20-%2016%209%20(B)-p-1080.webp" , top:"43%" , left:"40%" , isactive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7c20e0ed64c35076ef0b_212thumbnail_B-16_9.png" , top:"65%" , left:"55%" , isactive:false}
    ]
  return (
    <>
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>work</h1>
    <div className='w-full h-full absolute top-0'></div>
    {images.map((elem , imdex)=>(elem.isactive && (<img className="w-60 h-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{top:elem.top , left:elem.left}} alt="" />))
       
    )}
        </div>
    </div>
  </>
  )
}

export default Work