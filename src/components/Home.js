
import { useEffect } from "react"
import dish from "../images/dish1.png"
import kefi from "../images/kefi.png"
import satay from "../images/satay.png"


const Home = () => {

  useEffect(() => {

    const handleScroll = () => { 

      const circle = document.querySelector('.circle') ;
      if(window.scrollY > 100 ) {
        circle.classList.add('circle2');
      }else{
        circle.classList.remove('circle2');
      }

      const dish = document.querySelector('.dish') ;
      if(window.scrollY > 100 ) {
        dish.classList.add('dish2');
      }else{
        dish.classList.remove('dish2');
      }

    }
  
    window.addEventListener('scroll', handleScroll);
 
      }, []);
  
    return (
     <div name="home" className="flex home mt-[-14vh] h-[114vh] bg-cover bg-no-repeat w-full  bg-[url(https://www.m2woman.com/wp-content/uploads/2023/05/86-Berryfield-Dr-Richmond-003-1200x600.jpg)]">
      
     


 <div className=" lg:text-[10vh] sm:text-4xl italic  text-center sm:top-[6vh] lg:top-[30vh] font-lora absolute sm:ml-0 lg:ml-14 flex">
        <h1 className="lg:mt-[10vh] backdrop-blur-lg bg-gray-50 p-4 rounded-xl">Welcome to Kefi's Kitchen</h1>
      </div>
      <div className="circle"> </div>
      <img src={satay} alt="dish" className="dish  " /> 
      {/* <div className="  w-[100%]    ">

      <img src="https://wallpapers.com/images/hd/720p-kitchen-background-gz4c00kjbo10hcw8.jpg" alt="dish" className=" object-contain rounded-xl " />
      </div> */}
      {/* <div className="w-[90%] mx-auto mt-20 sm:flex-col lg:flex-row flex">
      <div className="lg:w-[35%] ">
      <img src={egg} alt="" className="h-[50vh]" />
      </div>
      <div className="lg:w-[50%] ">
      <div className="flex mb-4">
      <h1 className="mt-10 text-3xl">01 </h1>
      <div className="w-[18vh] mx-auto p-8 text-center rounded-full h-[18vh] bg-black text-white">
      <p>Explore Dishes</p>
      </div>
      
      </div>
      <div className="w-[100.2%] lg:pr-[22vh] border-t border-r border-black pt-6">
        <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises</p>
      </div>
</div>
<div className="lg:w-[25%] ">

<div className="border-b border-l border-black pb-4 mt-[7.5vh]">
<div class="flex  items-center justify-center ">
  <div class="inline-flex -space-x-4 overflow-hidden rounded-lg">
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 1" />
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 2" />
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 3" />
    <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-medium">+3</span>
  </div>
</div>
<p className="ml-16">25k Well Reviews </p>
</div>
<div>
<img src={egg1} alt="" className="h-[25vh] mx-auto" />
</div>
</div>
      </div> */}
      </div>
     
    );
  }
  
  export default Home;
  