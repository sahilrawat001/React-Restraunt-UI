import React from 'react'
import Food from './Food'

const Temp = ({name,type,img} ) => {
  return (
     
    <div className='    relative rounded-full ' >
    {/* overlay */}
     <div className="  absolute w-full h-full bg-black/50 rounded-xl text-white  ">

       <p className=' font-bold text-2xl px-2 pt-4  '  >  {name} </p>
       <p className=' px-2    '  > {type} </p>
       <button className=' p-1 rounded-xl border-white bg-white text-black mx-2 absolute bottom-4'  >Order Now</button>
     </div>
     <img
      className=" max-h-[160px] md:max-h-[200px] object-cover rounded-xl  w-full"
     src= {img}
     alt='veg'/>
   </div>

  )
}

export default Temp
 