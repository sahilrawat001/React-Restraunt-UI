import React ,{ useState} from 'react'
import {  AiOutlineClose, AiOutlineMenu, AiOutlineSearch }from 'react-icons/ai';
import {  BsCart4  ,  BsPerson, BsPersonPlus  }from 'react-icons/bs';
import {  TbHeart, TbHelp,      TbTags, TbTruckDelivery, TbWallet   }from 'react-icons/tb';

const Navbar = () => {

const [nav , setNav ] = useState(false)

  return (
    <div className='   max-w-{1640px} mx-auto justify-between items-center p-4 flex flex-row ' >
    {/* left-side */}
      <div className='flex items-center'>
        
  <div  onClick={()=>setNav(!nav) }  className='cursor-pointer' >

    <AiOutlineMenu size={30}/>
  </div>
  <h2 className=' text-2xl sm:text-3xl lg:text-4xl px-2'  >  Eat
    <span className=' font-bold to-blue-800   ' >First</span>  </h2>
{/* right-one */}
        <div className='   hidden lg:flex md:flex bg-gray-200 rounded-full p-1
        text-[14px] items-center ml-4 ' >
      <p className=' bg-black cursor-pointer  text-white rounded-full p-2 mx-1' >delivery</p>
      <p className='p-2  cursor-pointer ' >pickup</p>

        </div> 
        </div>

    {/* search section */}

  <div className=' bg-gray-200 ml-2 mr-2 rounded-full flex  items-center px-2 
   w-[800px]  md:w-[360px] lg:w-[60%] ' >
    <AiOutlineSearch  size={25}  />
    <input  className=' bg-transparent p-2 w-full focus:outline-none'
     type="text" placeholder='Seach for food' />
  </div>
  
  {/* cart button */}

  <button className=' bg-black mr-2 text-white hidden md:flex items-center py-2 rounded-full px-3 ' >
   
    <BsCart4  
    size={20} className=' mr-2'
    />
  {/* <BsCartFill/> */}
  Cart
  </button>

{ nav ? <div className=" bg-black/80 fixed h-screen w-full z-10 top-0 left-0 ">
  </div>  :""  }


  
  <div className=   {nav ?  
  " bg-slate-100 fixed h-screen   z-10 top-0 left-0 w-[300px] duration-300 " 
   : "  bg-white fixed h-screen   z-10 top-0 left-[-100%] w-[-100%] duration-300"} >
    <AiOutlineClose 
    onClick={()=>setNav(!nav) }
    size={30}  className='absolute right-4 top-4 cursor-pointer'  />
    <h2 className=' text-2xl p-4' > Eat 
    <span className=' font-bold' >First   </span>  </h2>

    <nav>
<ul className=' flex flex-col p-4 text-gray-800' >

<li className=' text-xl py-4  flex ' >
  <BsPerson
  size={30} className='mr-4'  /> 
  Your Profile
</li>
<li className=' text-xl py-4  flex ' >
  <TbTruckDelivery  
  size={30} className='mr-4'  /> 
  Orders
</li>


<li className=' text-xl py-4  flex ' >
  <TbHeart  
  size={30} className='mr-4'  /> 
  Favourites
</li>


<li className=' text-xl py-4  flex ' >
  <TbWallet  
  size={30} className='mr-4'  /> 
    Wallet
</li>


<li className=' text-xl py-4  flex ' >
  <TbHelp  
  size={30} className='mr-4'  /> 
  Help
</li>


<li className=' text-xl py-4  flex ' >
  <TbTags
  size={30} className='mr-4'  /> 
  Promotions
</li>


<li className=' text-xl py-4  flex ' >
  <BsPersonPlus 
  size={30} className='mr-4'  /> 
  Invite Friends
</li>

</ul>

    </nav>
  </div>



    </div>
  )
}

export default Navbar