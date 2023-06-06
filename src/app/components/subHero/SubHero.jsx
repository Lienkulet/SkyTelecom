import Link from 'next/link'
import React from 'react'
import { BsTelephoneX } from 'react-icons/bs'
import { SlSpeedometer } from 'react-icons/sl'
import { GiGearHammer } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'


const SubHero = () => {
  return (
    <section className='flex flex-wrap items-center justify-center px-auto py-4 gap-10 mt-11'>
        <Link href={'/'} className='flex flex-col items-start justify-start text-white 
                    font-medium text-xs gap-1 min-w-[145px] min-h-[27px] cursor-default custom-link'>

                <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <BsTelephoneX size={'2rem'} className='custom-icon' />

            {/* <BsTelephoneX  size={'2rem'} className='hoverSvg' /> */}
            <p className='font-medium leading-[1.2rem] mt-2'>
                Χωρίς τηλεφωνική
                <br />
                σύνδεση
            </p>
            <div className='hoverLine h-[3px] w-full mt-1'></div>
        </Link>
        <Link href={'/'} className='flex flex-col items-start justify-between text-white 
                    font-medium text-xs gap-2 min-w-[145px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <SlSpeedometer size={'2rem'}  className='custom-icon' />
            <p className='font-medium leading-[1.2rem]'>
                Κλειδωμένες
                <br />
                ταχύτητες
            </p>
            <div className='hoverLine h-[3px] w-full '></div>
        </Link>
        <Link href={'/'} className='flex flex-col items-start justify-start text-white
                     font-medium text-xs gap-2 min-w-[145px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
                </svg>


            <GiGearHammer size={'2rem'} className='custom-icon' />
            <p className='font-medium leading-[1.2rem]'>
                Γρήγορη
                <br />
                εγκατάσταση
            </p>
            <div className='hoverLine h-[3px] w-full '></div>
        </Link>
        <Link href={'/'} className='flex flex-col min-min-w-[145px] items-start justify-between text-white
                             font-medium text-xs gap-2 min-w-[145px] min-h-[27px] cursor-default custom-link'>
            <svg width="0" height="0">
                <linearGradient id="hoverSvg" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#30a6ef" offset="0%" />
                    <stop stopColor="#c610c6" offset="100%" />
                </linearGradient>
                </svg>


            {/* <HiOutlineUserGroup size={'2rem'} style={{ stroke: "url(#hoverSvg)"}}/> */}
            <HiOutlineUserGroup size={'2rem'} className='custom-icon1' />

            <p className='font-medium leading-[1.2rem]'>
                1000άδες ικανοποιημένοι
                    <br />
                συνδρομητές
            </p>
            <div className='hoverLine h-[3px] w-full bottom-0 '></div>
        </Link>
    </section>
  )
}

export default SubHero