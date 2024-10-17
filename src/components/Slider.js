// SliderComponent.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dish from "../images/dish1.png"
import egg from "../images/dish6.png"
import egg1 from "../images/egg1.png"

const dishes = [
    dish, 
    egg,
    egg1,
];

const SliderComponent = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1); // Small screens (mobile)
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2); // Medium screens (tablet)
    } else {
      setSlidesToShow(3); // Large screens (desktop)
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial check on component mount
    window.addEventListener("resize", updateSlidesToShow); // Update on window resize
    return () => window.removeEventListener("resize", updateSlidesToShow); // Clean up event listener
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => handleBeforeChange(current, next),
  };

  const handleBeforeChange = (current, next) => {
    const slide = document.querySelector(`[data-index="${next}"] img`);
    slide.classList.add("grow-from-small");
    setTimeout(() => {
      slide.classList.remove("grow-from-small");
    }, 1000);
  };

  return (
    <div className="slider-container max-w-6xl mx-auto mt-10">
     <Slider {...settings}>
        {dishes.map((dish, index) => (
          <div key={index} className="p-4">
            <img
              src={dish}
              alt={`dish-${index}`}
              className="dish-image transition-all duration-1000 transform"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
