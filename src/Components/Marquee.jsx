import React from "react";

const Marquee = ({imagesurls}) => {
 
  return (
  <div className="flex w-full gap-20 py-8 whitespace-nowrap  " >
    {imagesurls.map(url=> <img src={url} className="w-20"/>)}
    {/* {imagesurls.map(url=> <img src={url} className=""/>)} */}
    
  </div>
  )
};

export default Marquee;
