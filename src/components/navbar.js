import React, { useState } from 'react'
import logo from "../images/logo.png"
import ham from "../images/download.png"
import { Link } from 'react-scroll'

export default function Navbar() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((prev) => !prev)
  }


  return (
<div className='fixed top-0 w-full z-[10] backdrop-blur-2xl backdrop-opacity-5  '>

<li className='w-[10%] sm:flex lg:hidden bg-white m-2 rounded-full right-0 fixed' onClick={handleShow}><img src={ham} className=''></img></li>

{
  show  && <div className=' w-[30vh]  p-8 text-xl bg-white absolute right-0 top-12 rounded-xl nav'>
    <ul>
    {/* <li className='text-4xl '><img src={logo} alt="dish" className="w-[30vh] lg:h-[17vh] pt-2 " /></li> */}
  
    <li className=' bg-white rounded-2xl p-2 text-center h-14 m-2'> <Link to="menu" smooth={true} offset={50} duration={500}>Menu</Link></li>
            <li className=' bg-white rounded-2xl p-2 text-center h-14 m-2'><Link to="about" smooth={true} offset={50} duration={500}>About Us</Link></li>
            <li className=' bg-white rounded-2xl p-2 text-center h-14 m-2 z-4'>Reach Out</li>
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
