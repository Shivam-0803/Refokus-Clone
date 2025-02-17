import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {
  var images = [
    [
      "https://media.istockphoto.com/id/1049076702/photo/route-66-main-street-of-america-logo-with-retro-style-wings.webp?a=1&b=1&s=612x612&w=0&k=20&c=yGonlkOwroXk2bQzRTwqgnFwHEbEmx68qIAJV8l1ZqU=",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
    ],
    
    [
      "https://media.istockphoto.com/id/1049076702/photo/route-66-main-street-of-america-logo-with-retro-style-wings.webp?a=1&b=1&s=612x612&w=0&k=20&c=yGonlkOwroXk2bQzRTwqgnFwHEbEmx68qIAJV8l1ZqU=",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwbG9nbyUyMGJsYWNrfGVufDB8fDB8fHww",
    ],
    
  ];
  return (
    <div className='bg-zinc-900 py-40 '>
      {images.map(item => <Marquee imagesurls={item}/>)}
        
    </div>
  )
}

export default Marquees