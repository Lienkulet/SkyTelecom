'use client';
import Program from '@/components/program/Program';
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick';

const page = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const programs = [
    [
      // Internet
      {
          title: 'HomeAirFiber',
          br: 'Internet 24',
          price: 17,
          download: '24/2 Mbps',
          install: 'ΔΩΡΕΑΝ',
          ip: '4,95€/το μήνα',
          tryBuy: '3 ημέρες',
      },
      {
          title: 'HomeAirFiber',
          br: 'Internet 35',
          price: 21,
          download: '35/3 Mbps',
          install: 'ΔΩΡΕΑΝ',
          ip: '4,95€/το μήνα',
          tryBuy: '3 ημέρες',
      },
      {
          title: 'HomeAirFiber',
          br: 'Internet 50',
          price: 27,
          download: '50/5 Mbps',
          install: 'ΔΩΡΕΑΝ',
          ip: '4,95€/το μήνα',
          tryBuy: '3 ημέρες',
      },
      {
        title: 'HomeAirFiber',
        br: 'Internet 100',
        price: 45,
        download: '100/10 Mbps',
        install: 'ΔΩΡΕΑΝ',
        ip: '4,95€/το μήνα',
        tryBuy: '3 ημέρες',

    },
  ],
  [
    // Double Play
    {
        title: 'HomeAirFiber',
        br: 'Double Play 24',
        price: 23,
        download: '24/2 Mbps',
        tryBuy: '3 ημέρες',
        landmine: 'Απεριόριστα',
        mobile: 120,
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
        br: 'Double Play 50',
        price: 27,
        download: '50/5 Mbps',
        tryBuy: '3 ημέρες',
        landmine: 'Απεριόριστα',
        mobile: 120,
    },
    {
      title: 'HomeAirFiber',
      br: 'Double Play 100',
      price: 45,
      download: '50/5 Mbps',
      tryBuy: '3 ημέρες',
      landmine: 'Απεριόριστα',
      mobile: 120,
  },
],
  ]

  return (
    <section className='flex flex-col items-center justify-center md:mt-44 mt-20 text-white'>
      <header className='flex flex-col items-start justify-center max-w-[1200px] gap-4 mb-12 px-4'>
        <h3 className='font-medium md:text-2xl text-xl'>Προγράμματα</h3>
        <h2 className='font-extralight md:text-5xl text-3xl mt-10 md:mt-0 mb-4'>Home</h2>
        <p className='font-light md:text-lg'>Τώρα, με τα νέα προγράμματα Home όλοι στο σπίτι απολαμβάνουν υπερυψηλές ταχύτητες internet & δυνατότητα εγκατάστασης νέας τηλεφωνικής σύνδεσης τεχνολογίας VoIP. Ανακάλυψε τα πακέτα μας και επίλεξε αυτό που ταιριάζει στις ανάγκες σου.</p>
      </header>
      <main className='overflow-hidden'>
        <Image
          src={'/home-landing-nav.jpg'}
          alt='home-landing'
          width={1800}
          height={2500}
          className='md:rounded-2xl scale-150 md:scale-100  ' 
          // w-[300px] h-[300px] md:w-full md:h-full
        /> 

        <div className='flex flex-row items-center justify-center mt-14 gap-[0.5px]'>
          <button className={`${activeBtn === 1? 'purple-gradient ' :  ' purpleBorder hoverBg duration-700 ease-in-out'}
              text-center md:w-56 w-36 h-14  py-4 font-medium font-regular text-sm
          `}
            onClick={() => setActiveBtn(1)}
          >Internet</button>
           <button className={`${activeBtn === 2? 'purple-gradient ' :  ' purpleBorder hoverBg duration-700 ease-in-out'}  
           text-center md:w-56 w-36 h-14 py-4 font-medium font-regular text-sm
          `}
            onClick={() => setActiveBtn(2)}
          >Double Play</button>
        </div>
        <div className='flex items-center md:text-start text-center justify-center mt-10 mb-20 '>
        {activeBtn === 2? <h3>Συνδυαστικά προγράμματα τηλεφωνίας, με τις υψηλότερες ταχύτητες.</h3> : 
          <h3>Σερφάρισμα σε υψηλές ταχύτητες χωρίς την εγκατάσταση τηλεφωνικής σύνδεσης.</h3>}
          </div>
        <div className='hidden md:flex flex-row items-center justify-center gap-10'>
          {programs.length > 0 && programs[activeBtn-1].map((program, index) => (
              <Program key={program.id} progDetails={program}  middle={index == 1 ? true : false} activeBtn={false} />
          ))}
        </div>
        
        <div className='md:hidden w-full mt-10 mb-10 ml-4 programsSlider max-w-xs'>
          <Slider {...settings}>
            {programs.length > 0 && programs[activeBtn-1].map((program, index) => (
              <Program 
                key={program.id} 
                progDetails={program}  
                middle={index == 1 ? true : false} 
                activeBtn={false} 
              />
              ))}
          </Slider>
        </div> 
                
      </main>
    </section>
  )
}

export default page