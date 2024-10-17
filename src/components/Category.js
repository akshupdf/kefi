import React from 'react'
import egg1 from "../images/dish3.png"
import egg5 from "../images/dish4.jpg"
import egg2 from "../images/dish5.png"
import egg3 from "../images/katsu.png"
import egg4 from "../images/egg1.png"

const Arrow = () => {

    return(
<svg fill="#000000" className='w-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="4" height="4" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path> </g> </g> </g></svg>
    )
}

export default function Category() {
  return (
    <div className=' w-[100%] mx-auto '>
      <h1 className='text-center text-6xl bg-white w-[100%] mx-auto font-lora italic'>Our Menu</h1>
<div className='w-[100%] bg-white z-30 m-auto sm:flex-col lg:flex-row   rounded-xl'>
  <div className='w-[100%] flex text-4xl  font-lora italic'>
  <div className='lg:w-[40%] flex justify-center'>
    <img src={egg3} alt="" className="h-[50vh] object-contain " />

    </div>
    <div className='lg:w-[40%] m-auto  justify-start'>
      <h1 className='mb-4 font-bold'>Katsu Curry</h1>
    <p>A Japanese meal of a warm, vegetable curry served with crumb fried chicken breast and rice.</p>
    </div>
  </div>
  <div className='w-[100%] flex text-4xl  font-lora italic'>
 
    <div className='lg:w-[40%] m-auto  justify-start'>
      <h1 className='mb-4 font-bold'>Katsu Curry</h1>
    <p>A Japanese meal of a warm, vegetable curry served with crumb fried chicken breast and rice.</p>
    </div>
    <div className='lg:w-[40%] flex justify-center'>
    <img src={egg3} alt="" className="h-[50vh] object-contain " />

    </div>
  </div>
</div>
  
    {/* <div className='w-[80%] bg-white z-30 m-auto sm:flex-col lg:flex-row flex mt-20 pt-8 '>
        <div className='lg:w-[70%]'>
        <div className="w-[90%] lg:text-[12vh] leading-[14vh]  justify-center font-lora  mt-4">
        <h1>EXPERIENCE OF REAL RECIPES TASTE</h1>
      </div>
      <div className='border-t border-black flex sm:flex-col lg:flex-row justify-between pt-4'>
      <img src={egg5} alt="" className="h-[10vh] w-[10%] " />
      <p  className='lg:w-[45%] '>But our menu doesn't stop at breakfast. We also offer a wide range of kebab plates.</p>
      <button className=' lg:w-[40%] flex justify-end pt-4 underline'>VIEW ALL</button>
      </div>
        </div>
    <div className='lg:w-[30%] flex justify-start'>
    <img src={egg1} alt="" className="h-[50vh] " />
    </div>
    </div>
    <div className='w-[80%] m-auto flex mt-20'>

        <div className='w-[100%] flex'>
        <div className=' w-[15%] flex justify-start mt-6 text-2xl'>
   02
    </div>
    <div className='sm:ml-4 lg:text-[12vh] flex justify-center leading-[6vh] font-lora pt-4'>
   OUR CATEGORIES
    </div>
    <div className='lg:w-[18%] ml-10 '>
  All grilled to perfection over charcoal ,our dips and sauces.
    </div>
        </div>
        </div>
    <div  className='w-[80%] m-auto flex sm:flex-col lg:flex-row mt-20'>
    <div className='lg:w-[40%] flex justify-start'>
    <img src={egg3} alt="" className="h-[50vh] object-contain " />
    </div>
    <div className='lg:w-[60%] flex justify- pt-10 text-xl font-semibold'>
    <ul>
        <li className='h-10 border-b border-black mb-2 flex justify-between '><p className=''>  Chicken Kabab </p> <span className='ml-[20vh]'><Arrow /></span></li>
        <li className='h-10 border-b border-black mb-2 flex justify-between'><p className=''> White Beans with shank </p> <Arrow /></li>
        <li className='h-10 border-b border-black mb-2 flex justify-between'><p className=''> Mandi with Chicken </p> <Arrow /></li>
        <li className='h-10 border-b border-black mb-2 flex justify-between'><p className=''> Green Beans with Chicken </p> <Arrow /></li>
        <li className='h-10 border-b border-black mb-2 flex justify-between'><p className=''> Stuffed Chicken with salad </p> <Arrow /></li>
    </ul>
    </div>
    <div className='lg:w-[35%] flex justify-center'>
    <img src={egg2} alt="" className="h-[60vh]  " />
    </div>
    </div>
    <div className='w-[80%] m-auto flex sm:flex-col lg:flex-row'>
        <div className='lg:w-[29%] flex m-auto text-left text-xl'>
            <p>We understand that every event is unique and we work closely with you to customize our catering menu to suit your specific needs.</p>
        </div>
        <div className='lg:w-[40%] ml-10 '>
    <img src={egg4} alt="" className="h-[45vh]  " />
    </div>
        <div className="w-[18vh] m-auto p-10  text-center rounded-full h-[18vh] bg-black text-white">
      <p>Explore More</p>
      </div>
        </div> */}
    </div>
  )
}
