'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Hero = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const changeSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
    sliderRef.current.slickGoTo(slideIndex);
  };

  return (
    <section className="text-red sliderWrapper overflow-hidden max-w-full mt-14">
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          <figure className="relative">
            <Image 
              src="/homebanners.jpg" 
              alt="homebanners" 
              width={1900} 
              height={831} />
              <figcaption className='absolute top-[65%] z-9 left-36 flex flex-col text-white items-start'>
                <h1 
                  className='font-medium text-4xl mb-2'
                  >Home, Business & Professional
                </h1>
                <p className='font-regular text-left text-sm mb-2'>
                  Άλλαξε την καθημερινότητά σου, με ταχύτητες Internet έως και 
                  <strong>1GBPS</strong>
                    !
                    <br />
                  Βρες το πρόγραμμα που σου ταιριάζει από 17,90€ και σέρφαρε απεριόριστα!
                </p>
                <button className='px-10 py-2 z-8  rounded-md cursor-pointer switch-purpleGrad
                  '>Ανακάλυψέ τα</button>
              </figcaption>
          </figure>
          <div className="relative">
            <Image 
              src="/homebanners2.jpg" 
              alt="homebanners2" width={1900} 
              height={831} />
          </div>
          <div className="relative">
            <Image 
              src="/homebanners3.jpg" 
              alt="homebanners3" 
              width={1900} 
              height={831} />
              
          </div>
        </Slider>

        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <div className={`rounded-full bg-cover cursor-pointer`} onClick={() => changeSlide(0)}>
              <Image src="/heroRound.png" alt="heroRound" width={37} height={45} className="rounded-full bg-cover cursor-pointer" />
            </div>
            <div className={`rounded-full bg-cover cursor-pointer`} onClick={() => changeSlide(1)}>
              <Image src="/heroRound2.png" alt="heroRound2" width={35} height={35} className="rounded-full bg-cover cursor-pointer" />
            </div>
            <div className={`rounded-full bg-cover cursor-pointer`}  onClick={() => changeSlide(2)}>
              <Image src="/heroRound3.png" alt="heroRound3" width={35} height={35} className="rounded-full bg-cover cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
