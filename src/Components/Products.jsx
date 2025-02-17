import React from 'react'
import Product from './Product'

const Products = () => {

    var products =  [
        {
        title: "arqitel" , description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore libero nulla at doloremque dolore corrupti cupiditate? Dolor adipisci accusamus placeat!" , live:true , case:false,
       
    } ,
    {
        title: "TTR" , description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore libero nulla at doloremque dolore corrupti cupiditate? Dolor adipisci accusamus placeat!" , live:true , case:true,
       
    } ,
    {
        title: "YIR 2022" , description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore libero nulla at doloremque dolore corrupti cupiditate? Dolor adipisci accusamus placeat!" , live:true , case:true,
       
    } , 
    {
        title: "Yahoo" , description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore libero nulla at doloremque dolore corrupti cupiditate? Dolor adipisci accusamus placeat!" , live:true , case:true,
       
    } , 
   ];


  return (
    <div className=' bg-zinc-900'>
        {products.map((val , index) => <Product val = {val}/>

        )}
        
    </div>
  )
}

export default Products