import React from 'react'

const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 ' > 
<div className="  max-h-[500px] relative ">

<div className=' absolute w-full h-full place-items-start   text-gray-300 max-h-[500px] bg-black/30 flex flex-col   left-0 ' >

<h2  className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' > The <span className=' text-orange-700' >  Best</span> </h2>
<h2 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >Foods  <span className=' text-orange-700' > Delivered</span> </h2>
</div>
 <img className='  w-full max-h-[500px] object-cover  g' src=" 
 https://images.unsplash.com/photo-1651307436084-0132d72010bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anVuayUyMGZvb2R8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60
 " 
 
 alt="eatable" />

</div>
    </div>
  )
} 

export default Hero