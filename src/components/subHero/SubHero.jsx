'use client';
import Link from 'next/link'
import React from 'react'
import { BsTelephoneX } from 'react-icons/bs'
import { SlSpeedometer } from 'react-icons/sl'
import { GiGearHammer } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import Slider from 'react-slick'


const SubHero = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section>
        <div className='hidden md:flex flex-wrap items-center justify-center px-auto py-4 gap-10 mt-11'>
        <Link href={'/'} className='flex flex-col items-start justify-start text-white 
                    font-normaltext-xl gap-1 min-w-[245px] min-h-[27px] cursor-default custom-link'>

                <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <BsTelephoneX size={'3rem'} className='custom-icon' />

            {/* <BsTelephoneX  size={'2rem'} className='hoverSvg' /> */}
            <p className='font-normalleading-[1.2rem] mt-2'>
                Χωρίς τηλεφωνική
                <br />
                σύνδεση
            </p>
            <div className='hoverLine h-[3px] w-full mt-3'></div>
        </Link>
        <Link href={'/'} className='flex flex-col items-start justify-between text-white 
                    font-normaltext-xl gap-2 min-w-[245px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <SlSpeedometer size={'3rem'}  className='custom-icon' />
            <p className='font-normalleading-[1.2rem]'>
                Κλειδωμένες
                <br />
                ταχύτητες
            </p>
            <div className='hoverLine h-[3px] w-full mt-3'></div>
        </Link>
        <Link href={'/'} className='flex flex-col items-start justify-start text-white
                     font-normaltext-xl gap-2 min-w-[245px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <GiGearHammer size={'3rem'} className='custom-icon' />
            <p className='font-normalleading-[1.2rem]'>
                Γρήγορη
                <br />
                εγκατάσταση
            </p>
            <div className='hoverLine h-[3px] w-full mt-3'></div>
        </Link>
        <Link href={'/'} className='flex flex-col min-w-[245px] items-start justify-between text-white
                             font-normaltext-xl gap-2 min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#30a6ef" offset="0%" />
                    <stop stopColor="#c610c6" offset="100%" />
                </linearGradient>
                </svg>


            {/* <HiOutlineUserGroup size={'2rem'} style={{ stroke: "url(#hoverSvg)"}}/> */}
            <HiOutlineUserGroup size={'3rem'} className='custom-icon1' />

            <p className='font-normalleading-[1.2rem]'>
                1000άδες ικανοποιημένοι
                    <br />
                συνδρομητές
            </p>
            <div className='hoverLine h-[3px] w-full bottom-0 mt-3'></div>
        </Link>
        </div>


            {/* MOBILE SLIDER  */}

        <div className='md:hidden flex items-center justify-center py-4 mt-11 subHero'>
        <Slider {...settings}>
        <div className='mx-4'>
        <Link href={'/'} className='flex flex-col items-center justify-center text-white text-center
                    font-normal text-base gap-1 min-w-[145px] min-h-[27px] cursor-default custom-link'>

                <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>

            <BsTelephoneX size={'3rem'} className='custom-icon' />

            <p className='font-normal leading-[1.2rem] mt-2'>
                Χωρίς τηλεφωνική
                <br />
                σύνδεση
            </p>
            <div className='hoverLine h-[3px] w-[200px] mt-3'></div>
        </Link>
        </div>
        <div>
        <Link href={'/'} className='flex flex-col items-center justify-center text-white text-center
                    font-normal text-base gap-2 min-w-[245px] min-h-[27px] cursor-default custom-link-slider'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>

            <SlSpeedometer size={'3rem'}  className='custom-icon' />
            <p className='font-normal leading-[1.2rem]'>
                Κλειδωμένες
                <br />
                ταχύτητες
            </p>
            <div className='hoverLine h-[3px] w-[200px] mt-3'></div>
        </Link>
        </div>
        <div>
        <Link href={'/'} className='flex flex-col items-center justify-center text-center text-white
                     font-normal text-base gap-2 min-w-[245px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>

            <GiGearHammer size={'3rem'} className='custom-icon' />
            <p className='font-normal leading-[1.2rem]'>
                Γρήγορη
                <br />
                εγκατάσταση
            </p>
            <div className='hoverLine h-[3px] w-[200px] mt-3'></div>
        </Link>
        </div>
        <div>
        <Link href={'/'} className='flex flex-col min-w-[245px] items-center justify-center text-white
                       text-center font-normal text-base gap-2 min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#30a6ef" offset="0%" />
                    <stop stopColor="#c610c6" offset="100%" />
                </linearGradient>
                </svg>

            <HiOutlineUserGroup size={'3rem'} className='custom-icon1' />

            <p className='font-normal leading-[1.2rem]'>
                1000άδες ικανοποιημένοι
                    <br />
                συνδρομητές
            </p>
            <div className='hoverLine h-[3px] w-[200px] bottom-0 mt-3'></div>
        </Link>
        </div>
        </Slider>
      </div>
    </section>
    
  )
}

export default SubHero