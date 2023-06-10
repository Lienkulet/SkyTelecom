'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsPlay } from 'react-icons/bs'
import Program from '../program/Program';
import Slider from 'react-slick';
import Link from 'next/link';

const Programs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const programs = [
    //  Home
    [
        {
            title: 'HomeAirFiber',
            br: 'Internet 24',
            price: 17,
            download: '24/2 Mbps',
            install: 'ΔΩΡΕΑΝ',
            ip: '4,95€/Μήνα',
            tryBuy: '3 ημέρες',
        },
        {
            title: 'HomeAirFiber',
            br: 'Double Play 35',
            price: 26,
            download: '35/3 Mbps',
            tryBuy: '3 ημέρες',
            landmine: 'Απεριόριστα',
            mobile: 120,
        },
        {
            title: 'HomeAirFiber',
            br: 'Internet 50',
            price: 27,
            download: '50/5 Mbps',
            install: 'ΔΩΡΕΑΝ',
            ip: '4,95€/Μήνα',
            tryBuy: '3 ημέρες',
        },
    ],
    //  Business
    [
        {
            title: 'BusinessAirFiber',
            br: 'Internet 24',
            price: 20,
            download: '24/2 Mbps',
            ip: 'ΔΩΡΕΑΝ',
            tryBuy: '3 ημέρες',
        },
        {
            title: 'BusinessAirFiber',
            br: 'Internet 35',
            price: 25,
            download: '35/7 Mbps',
            ip: 'ΔΩΡΕΑΝ',
            tryBuy: '3 ημέρες',
        },
        {
            title: 'BusinessAirFiber',
            br: 'Double Play',
            price: 35,
            download: '50/10 Mbps',
            tryBuy: '3 ημέρες',
            landmine: '&Απεριόριστα',
            mobile: 180,
        },
    ],
    // Professional
    [
        {
            title: 'ProFlex 300/300',
            download: 'Agreegated 300mbps',
            landmine: "1000'",
            equipment: 999
        },
        {
            title: 'Pro 300/300',
            download: 'Agreegated 300/300 Mbps',
            equipment: 1499
        },
        {
            title: 'Pro 300/300',
            download: 'Agreegated 1Gbps',
            landmine: "1000'",
            equipment: 999
        },
    ],
]


  const [activeBtn, setActiveBtn] = useState(0); 
  const [progDetails, setProgDetails] = useState([]); 

  useEffect(() => {
    setProgDetails([]);
    setProgDetails(programs[activeBtn]);
  }, [activeBtn])

  return (
    <section className='text-white mt-20 '>
        <header className='relative flex flex-col items-center justify-center'>
            <h1 className='font-normal  bg-transparent text-center font-regular text-4xl mb-4'>Δημοφιλέστερα Προγράμματα</h1>
            <p className='font-regular text-center text-base'>Επίλεξε το ιδανικό για σένα, για να απολαμβάνεις μοναδικές υπηρεσίες & προνόμια.</p>
          <div className='programsShadow h-4 w-4 absolute top-0 left-0 z-1'></div>
        </header>
        <main>
          <div className='flex flex-row w-full relative items-center justify-start mt-20 overflow-hidden'>
            <Image 
                src='/omProgram.png'
                alt='omProgram'
                width={150}
                height={150}
                className='hidden md:flex '
            />
            <div className='flex flex-row gap-4 items-center mx-4 w-full md:mr-28'>
            <div className='relative py-16 w-full'>
            <button className={`md:transform md:skew-x-12 relative
                     ${activeBtn === 0? 'purple-gradient' :  'border border-[#30a6ef]'}
                      px-6 py-4 md:py-[4rem] md:px-auto w-full`}
                     onClick={() => {
                      setActiveBtn(0)
                    }
                      }>
            <div className='md:absolute flex flex-row items-center gap-[0.2rem] 
            font-medium top-1/3 left-[40%] md:text-xl text-base transform -skew-x-12'
                    >
              <BsPlay size={'2rem'} className='hidden md:flex' />
              Home
            </div>
            </button>
            <div className='hidden md:flex'>
                <Image
                   src={'/home1.png'}
                   alt='home1'
                   width={150}  
                   height={150}  
                   className={`absolute z-9
                      ${activeBtn === 0? ' activeTopProgIcon1 ' :  ' topProgIcon1 '}`}
                />
              </div>
              <div className='hidden md:flex'>
                <Image
                  src={'/tabsGroup-1319.png'}
                  alt='tabsGroup-1319'
                  width={100}  
                  height={100}  
                  className={`absolute ${activeBtn === 0? ' activebottomProgIcon1' :  ' bottomProgIcon1 '}`}
               />
               </div>
               </div>
            <div className='relative py-16 w-full'>
            <button className={`md:transform md:skew-x-12 relative
                     ${activeBtn === 1? 'purple-gradient' :  'border border-[#30a6ef]'}
                      px-6 py-4 md:py-[4rem] md:px-auto w-full`}
                       onClick={() => {
                          setActiveBtn(1)
                      }
                      }>
            <div className='md:absolute flex flex-row items-center gap-[0.2rem] 
              font-medium top-1/3 left-[40%] transform -skew-x-12 md:text-xl text-base'
                    >
              <BsPlay size={'2rem'} className='hidden md:flex' />
              Business
            </div>
            </button>
            <div className='hidden md:flex'>
                <Image
                   src={'/business1.png'}
                   alt='business1'
                   width={120}  
                   height={120}  
                   className={`absolute z-9
                      ${activeBtn === 1? ' activeTopProgIcon2 ' :  ' topProgIcon2 '}`}
                />
              </div>
              <div className='hidden md:flex'>
                <Image
                  src={'/business2.png'}
                  alt='business2'
                  width={150}  
                  height={150}  
                  className={`absolute ${activeBtn === 1? ' activebottomProgIcon2' :  ' bottomProgIcon2 '}`}
               />
               </div>
               </div>

            <div className='relative py-16 w-full'>
            
            <button className={`md:transform md:skew-x-12 relative
                     ${activeBtn === 2? 'purple-gradient' :  'border border-[#30a6ef]'} 
                     px-3 py-4  md:py-[4rem] md:px-auto w-full`}
                      onClick={() => {
                          setActiveBtn(2)
                      }
                      }>
            <div className='md:absolute flex flex-row items-center gap-[0.2rem] 
            font-medium w-full top-1/3 left-[33.33%] transform -skew-x-12 md:text-xl text-base'
                    >
              <BsPlay size={'2rem'} className='hidden md:flex' />
              Professional  
            </div>
            </button>
            <div className='hidden md:flex'>
                <Image
                   src={'/prof1.png'}
                   alt='prof1'
                   width={150}  
                   height={150}  
                   className={`absolute z-9 
                      ${activeBtn === 2? ' activeTopProgIcon3 ' :  ' topProgIcon3 '}`}
                />
              </div>
              <div className='hidden md:flex'>
                <Image
                  src={'/tabsGroup-1320.png'}
                  alt='tabsGroup-1320'
                  width={70}  
                  height={70}  
                  className={`absolute ${activeBtn === 2? ' activebottomProgIcon3' :  ' bottomProgIcon3 '}`}
               /></div>
            </div>
            </div>
            <div className='hidden md:flex flex-row items-center gap-4 ml-4 absolute right-0'>
              <div className='transform skew-x-12 py-[4.2rem] px-[1rem]
                       skewBarBg'></div>
              <div className='transform skew-x-12 py-[4.2rem] px-[1rem]
                       skewBarBg'></div>
            </div>
        </div>
        
              {
                  progDetails.length > 0 && (
                    <div className='hidden md:flex flex-row items-center justify-center mt-32 gap-12'>
                          <Program key={0}
                              progDetails={
                                  progDetails[0]
                              }
                              middle={false}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                          <Program key={1}
                              progDetails={
                                  progDetails[1]
                              }
                              middle={true}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                          <Program key={2}
                              progDetails={
                                  progDetails[2]
                              }
                              middle={false}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                    </div>
                  )
                }

                {
                  progDetails.length > 0 && (
                    <div className='md:hidden mt-16 ml-4 programsSlider'>
                    <Slider {...settings}>
                        <Program key={0}
                              progDetails={
                                  progDetails[0]
                              }
                              middle={false}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                          <Program key={1}
                              progDetails={
                                  progDetails[1]
                              }
                              middle={true}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                          <Program key={2}
                              progDetails={
                                  progDetails[2]
                              }
                              middle={false}
                              activeBtn={activeBtn === 2 ? true : false}
                              />
                    </Slider>
                    </div>
                  ) 
                }
                <Link href={'/'} className='flex flex-row justify-center items-center mt-12 md:mt-24'>
                  <button className='purpleBorder text-center w-72 hoverBg py-4 font-medium font-regular text-sm'>
                    Δες όλα τα {activeBtn === 0? ' Home ' : `${activeBtn === 1? ' Business ' : 'Professional' }`} Προγράμματα
                  </button>
                </Link>
        </main>
    </section>
  )
}

export default Programs