import React from 'react'
import girl from "../images/girl.jpeg"



export default function Fish() {
  return (
    <div className='lg:mt-[200vh] sm:mt-[110vh] w-[100%] justify-center lg:flex   h-screen ' name="about">
        <div className='lg:w-[40%]  font-lora  items-center pt-20 lg:mr-[10vh]'>
       <h1 className=' lg:text-[8vh] sm:text-4xl italic text-center'> About Us </h1> 
       <p className='text-2xl w-[90%] text-justify mt-[10vh]  m-auto sm:mb-4 '>At Kefi, we believe in serving happiness through delicious food. Our cloud kitchen is all about bringing fresh, flavorful, and comforting meals right to your doorstep. With a focus on quality and convenience, we cook up a variety of dishes that are crafted with care and delivered with love. Whether you're craving a quick bite or a hearty meal, Kefi is here to satisfy your hunger and brighten your day.

</p>
        </div>
        <div className='lg:w-[45%]'>
        <img src={girl} alt="" className=" rounded-xl " />
        </div>
        
          {/* <div className='lg:text-[12vh] sm:text-4xl  flex justify-center font-lora pt-4'>
   VIEW ALL LATEST
    </div>
    <div className='w-[90%] m-auto flex sm:flex-col lg:flex-row mt-10'>
        <div className='lg:w-[35%]  m-auto text-xl'>
            <div>
                <p className='w-[75%] '>At ifood cafe,we strive to create a worm and welcoming</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Indian <span className=' '><Arrow /></span> </p>
            </div>
            <div className='mt-10'>
                <p className='w-[75%] '>We also offer a wide range of kebab plates, including chicken</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Asian <span className=' '><Arrow /></span> </p>
            </div>
              </div>
        <div className='w-[50%] ml-20 '>
    <img src={egg4} alt="" className="h-[50vh]  " />
    </div>
    <div className='lg:w-[35%]  m-auto text-xl'>
            <div>
                <p className='w-[75%] '>At ifood cafe,we strive to create a worm and welcoming</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Japans <span className=' '><Arrow /></span> </p>
            </div>
            <div className='mt-10'>
                <p className='w-[75%] '>We also offer a wide range of kebab plates, including chicken</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Chinese <span className=' '><Arrow /></span> </p>
            </div>
              </div>
        </div>
        <div className='w-[90%] mx-auto  pt-4 mt-20'>
  <h1 className='lg:text-[12vh] sm:text-4xl font-lora lg:text-center'> EXPLORE REAL TASTE</h1> 
   <p className='w-[60%] mx-auto lg:text-center text-xl mt-8'> We offer a variety of homemade pastries and sweets, including the almond-tapped semolina cakes called harissa and the indulgent kunafe with pistachios.</p>
    </div>
    <SliderComponent /> */}
    </div>
  )
}
