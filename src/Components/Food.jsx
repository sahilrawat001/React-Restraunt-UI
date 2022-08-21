import React from 'react'
import { useState } from 'react';
import {   data } from '../data/data' 
const Food = () => {
  const [food, setFood] = useState( data);

//filter  
const  filterByType=(category)=>{

  setFood(
    data.filter( (item)=>{
      return item.category===category;
    }   )
  )
}
const  filterByPrice=(price)=>{

  setFood(
    data.filter( (item)=>{
      return item.price===price;
    }   )
  )
}

  
  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12  ' > 
          <h1 className=' text-orange-600 font-bold text-4xl text-center ' > Top Rated Items </h1>
          {/* row filter */}
          <div className=" flex flex-col lg:flex-row justify-between   ">

        {/* type filter  */}
             
           <div className="">
          <p className=' text-gray-600 font-bold   ' > Filter Type</p>
             <div className=" flex justify-between    max-w-[490px]  ">
              <button onClick={ ()=>setFood(data) }  className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > All </button>
              <button onClick={ ()=>filterByType( 'burger' )  }     className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > Burger </button>
              <button  onClick={ ()=>filterByType( 'pizza' )  } className=' m-1 border-2 rounded-xl px-5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > Pizza  </button>
              <button  onClick={ ()=>filterByType( 'salad' )  } className=' m-1  border-2 rounded-xl px-5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > salad </button>
              <button  onClick={ ()=>filterByType( 'chicken' )  } className=' m-1  border-2 rounded-xl px-5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > Chicken </button>
             </div>
           </div>
           

           {/* price filter  */}
           <div>

          <p  className=' text-gray-600 font-bold ' > Filter Price </p>
          <div className=" flex justify-between   max-w-[390px] w-full ">  
          <button  onClick={ ()=>filterByPrice('₹')  }   className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 active:text-white  '    > ₹ </button>
          <button onClick={ ()=>filterByPrice('₹₹')  }  className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > ₹₹ </button>
          <button onClick={ ()=>filterByPrice('₹₹₹')  }  className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > ₹₹₹ </button>
          <button onClick={ ()=>filterByPrice('₹₹₹₹')  }  className='  m-1 border-2 rounded-xl px-5  border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  '    > ₹₹₹₹ </button>
           </div>
           </div>
          </div>
   {/* display data  */}
   <div className=' grid grid-cols-2 lg:grid-cols-4  gap-6  pt-4'  >
    {   food.map( (item,index)=>(

    <div key={index} className=" border shadow-lg hover:scale-105 duration-300 rounded-xl ">

    <img className=' w-full h-[300px] object-cover rounded-lg '  src={item.image} alt= {item.name} />     
    <div className=" flex justify-between  px-2 py-4">
      <p  className=' font-bold   '  >{item.name} </p>
      <p  className='    '  > <span className=' cursor-pointer  bg-orange-500  text-white p-1 rounded-full'  >{item.price} </span> </p>
    </div>

    </div>

    )  )   }
   </div>
    </div>
  )
}

export default Food