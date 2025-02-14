import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Stripe from './Components/Stripe'
import Products from './Components/Products'
import Product from './Components/Product'

const App = () => {
  return (
    <div className='w-full text-white h-screen bg-zinc-900 font-["Calibri"] '>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      {/* <Product/> */}

    </div>
  )
}

export default App