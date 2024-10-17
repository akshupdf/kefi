import React from 'react'
import logo from "../images/logo.png"

export default function Footer() {
  return (
    <div name="contact" >
        <div className="lg:flex sm:text-3xl lg:text-[8vh] justify-center leading-6 lg:mt-4 sm:mt-[64vh] font-lora italic">
        <h1>LETS CONNECT WITH US</h1>
      </div>
      <div className='lg:items-center sm:flex-col lg:flex-row text-xl mb-10 justify-center flex w-[80%] mt-10 mx-auto'>
    <div className='lg:w-[50%] lg:p-10 sm:p-4'>
    <img src={logo} alt="logo" className="  lg:w-[30%] sm:w-[20vh] m-auto" /> 
    <p className='font-lora italic text-center'>A Cloud Kitchen that prepares and serves food</p>
    </div>
    {/* <div className='lg:w-[20%] lg:p-10 sm:p-4'>
<p className='m-2'>About Us</p>
<p  className='m-2'>Dishes</p>
<p  className='m-2'>Contact</p>
</div>
<div className='lg:w-[25%] lg:p-10 sm:p-4'>
<p  className='m-2'>Compare Prices</p>
<p  className='m-2'>Resources</p>
<p  className='m-2'>Health & Safety</p>
</div>
<div className='lg:w-[25%] lg:p-10 sm:p-4'>
<p className='m-2'>Terms of service</p>
<p className='m-2'>Privacy & Policy</p>
<p className='m-2'>Request Beta</p>
</div> */}
<div className='lg:w-[50%] lg:p-10 sm:p-4 flex'>
{/* <p className='m-2'>Facebook</p> */}
<div className='mt-10 font-lora italic'><a href="https://www.instagram.com/just_kefii/"> 
<svg
    id="instagram"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="80px"
    height="80px"
    viewBox="0 0 169.063 169.063"
    style={{ enableBackground: 'new 0 0 169.063 169.063' }}
    xmlSpace="preserve"
  >
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f58529', stopOpacity: 1 }} />
        <stop offset="30%" style={{ stopColor: '#dd2a7b', stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: '#8134af', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#515bd4', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g>
      <path
        fill="url(#instagramGradient)"
        d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
        c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
        c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
        c17.455,0,31.656,14.201,31.656,31.655V122.407z"
      />
      <path
        fill="url(#instagramGradient)"
        d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
        C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
        c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
      />
      <path
        fill="url(#instagramGradient)"
        d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
        c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
        C135.661,29.421,132.821,28.251,129.921,28.251z"
      />
    </g>
  </svg> </a></div>
  <div className='ml-8 mt-8'>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>
  </div>
{/* <p className='m-2'>Youtube</p> */}
</div>
      </div>
    </div>
  )
}
