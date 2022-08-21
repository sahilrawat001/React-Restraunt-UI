import React from 'react'
import Temp from './Temp'




const Cards = () => {
  return (
    <div className=" max-w-[1460px] p-4 py-12 lg:gap-8 mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-6 ">
       
    <Temp  name="Cheese Toast" type="Appetizer" 
    img="https://images.unsplash.com/photo-1619869591528-080e2124de44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "
    />
    <Temp name=" Lemonade" type=" Beverages" 
    img="https://images.unsplash.com/photo-1563282396-c299392870cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "
    />
    <Temp name="frozen Sundae" type="Dessert"
    img=" https://images.unsplash.com/photo-1597648152428-f883fbc9c873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "
    />
     
        


    </div>
  )
}

export default Cards