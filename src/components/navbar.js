import React, { useState } from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-scroll'

export default function Navbar() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((prev) => !prev)
  }


  return (
<div className='fixed top-0 w-full z-[10] backdrop-blur-2xl backdrop-opacity-5  '>

<li className='w-[10%] sm:flex lg:hidden' onClick={handleShow}>Menu</li>

{
  show  && <div className='absolute  p-8 z-2'>
    <ul>
    <li className='text-4xl '><img src={logo} alt="dish" className="lg:w-[22vh] sm:w-[10vh] lg:h-[17vh] pt-2 " /></li>
  
    <li className=' bg-white rounded-2xl p-2 text-center h-14 mr-4'> <Link to="menu" smooth={true} offset={50} duration={500}>Menu</Link></li>
            <li className=' bg-white rounded-2xl p-2 text-center h-14 mr-4'><Link to="about" smooth={true} offset={50} duration={500}>About Us</Link></li>
            <li className=' bg-white rounded-2xl p-2 text-center h-14 mr-4'>Reach Out</li>
    </ul>
    </div>
}

<div className='w-[100%] lg:flex sm:hidden   '>
        <ul className='w-[50%] ml-[10vh] '>
            {/* <li className='w-[30%]'>One of our specialities is our hearty breakfast</li>
            <li>Health & Safety</li> */}
            <li className='text-4xl '><img src={logo} alt="dish" className="lg:w-[22vh] sm:w-[10vh] lg:h-[17vh] pt-2 " /></li>
            
        </ul>

        <ul className='w-[50%] justify-end pt-8 text-2xl flex '>
        <li className='w-[20%] bg-white cursor-pointer rounded-2xl p-2 text-center h-14 mr-4'><Link to="menu" smooth={true} offset={50} duration={500}>Menu</Link></li>
            <li className='w-[20%] bg-white cursor-pointer rounded-2xl p-2 text-center h-14 mr-4'><Link to="about" smooth={true} offset={50} duration={500}>About Us </Link> </li>
            <li className='w-[20%] bg-white cursor-pointer rounded-2xl p-2 text-center h-14 mr-4'><Link to="contact" smooth={true} offset={50} duration={500}>Reach Out</Link></li>
        </ul>
    </div>
</div>

  
  )
}
