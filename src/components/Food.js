import React from "react";
import img1 from "../images/prawns.png"
import img2 from "../images/dimsum.png"
import img3 from "../images/katsu.png"
import img4 from "../images/katsu.png"
import img5 from "../images/katsu.png"
import img6 from "../images/katsu.png"
import img7 from "../images/las.jpg"
import img8 from "../images/katsu.png"
import img9 from "../images/indo.png"
import satay from "../images/satay.png"

const foodItems = [
  { id: 1, name: "Butter Garlic Prawns", img: img1 , text : "Prawns tossed in creamy, butter sauce garnished with celery and the combination of garlic brings the aromatic flavours out." },
  { id: 2, name: "Dim-Sum", img: "https://rasamalaysia.com/wp-content/uploads/2015/03/shu_mai1.jpg" , text : "A delightful bite sized dish, filled with bursting flavours, enclosed in a soft buri." },
  { id: 3, name: "Chicken Satay", img: "https://thebigmansworld.com/wp-content/uploads/2023/10/chicken-satay-recipe.jpg" , text: "A Thai dish comprised of skewered chicken.glazed with peanute sauce,served with fresh vegetables and a sode of Thai peanute sauce."},
  { id: 4, name: "Pin-Pork", img: "https://littlecoastalkitchen.com/wp-content/uploads/2021/04/pork-tenderloin-with-Pickapeppa-scaled.jpg" , text :"Thin slices of pork, cooked in a homemade bbq and pineapple sauce,creating the perfect sweet and savoury dish."},
  { id: 5, name: "Persian Kebab", img: "https://cdn01.eavartravel.com/2023/7/70d1d799-7923-4c0f-90de-7462844d10e2.jpg" ,text : "A forgotten Parsi recipe of minced and seasoned meat,stuffed and shaped into big meatballs and shallow fried to have the perfect crumby outside texture."},
  { id: 6, name: "Chilli Mango Wings", img: "https://img.buzzfeed.com/video-api-prod/assets/26720b6fa4bc4bebb99ae77d2f5b022d/mango_haba_FB_thumb.jpg" , text: "Chicken wings coated in breadcrumbs,tossed in a pan with freshly made mango chilli sauce."},
  { id: 7, name: "Tri-Layered Lasagna", img: "https://couscousday.com/wp-content/uploads/2020/01/Ultimate-Meat-Lasagna-3-1-688x913.jpg" , text: "Three layered lasagna comprising of a meat,vegetable and mashed potato layer, a perfect hearty meal."},
  { id: 8, name: "Katsu Curry", img: "https://loveandgoodstuff.com/wp-content/uploads/2020/11/pork-katsu-curry-1200x1200-1.jpg" ,text :"A Japanese meal of a warm,vegetable curry served with crumb fried chicken breast and rice"},
  { id: 9, name: "Nasi Goreng", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL425AGbYall2EsGdIeuTWib3PKKgmLe0cg&s" , text :"An Indonesian dish comprising of chicken satay on a bed of Indonesian rice."},
];

export default function Food() {
  return (
    <div className=" items-center justify-center sm:h-80 sm:overflow-y-auto lg:overflow-visible min-h-screen sm:p-2 lg:p-8 sm:left-2 lg:left-14 absolute" name='menu'>
           <h1 className='text-center text-6xl  w-[100%] mx-auto font-lora italic z-[10vh] mb-8 ' >Our Menu</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 perspective-1000 cursor-pointer ">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white p-4 lg:w-[60vh] sm:w-[50vh]  z-10 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:rotate-x-6 hover:rotate-y-6"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <p className="font-lora italic text-2xl pt-4">{item.name}</p>
            <div className="absolute p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
