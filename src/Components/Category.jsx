import React from 'react'
import { categories } from '../data/data'
const Category = () => {
  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12' > 
  <h1  >Top Rated Menu Items  </h1>
   <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 ">
   {   categories.map( (item,index)=>(

<div key={index} className=" bg-gray-300 rounded-lg p-4  flex justify-between items-center mt-4 hover:scale-105 duration-600 ">
 <h2 className=" font-bold sm:text-xl ">  {item.name} </h2>
<img className=' w-20 object-cover   rounded-lg cursor-pointer  '  src={item.image} alt= {item.name} />     
 

</div>

)  )   }

   </div>
    </div>
  )
}

export default Category