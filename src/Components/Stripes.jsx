import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      url: "https://media.istockphoto.com/id/1049076702/photo/route-66-main-street-of-america-logo-with-retro-style-wings.webp?a=1&b=1&s=612x612&w=0&k=20&c=yGonlkOwroXk2bQzRTwqgnFwHEbEmx68qIAJV8l1ZqU=" ,
      number: 21,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      number: 32,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      number: 48,
    },
    {
      url: "https://images.unsplash.com/photo-1625074692991-b57f8ff90df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhciUyMGxvZ28lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      number: 21,
    },
    {
      url: "https://images.unsplash.com/photo-1590456744030-8b9128517cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhciUyMGxvZ28lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      number: 32,
    },
    {
      url: "https://images.unsplash.com/photo-1655940646140-804d0caa2aef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhciUyMGxvZ28lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      number: 48,
    },
  ];
  return (
  <div className=" flex items-center mt-18 ">
    {data.map((elem , index) =>(
        <Stripe val = {elem}/>
    )
    )}
  </div>
  )
};

export default Stripes;
