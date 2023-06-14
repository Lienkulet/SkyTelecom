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
      // ProFlex
      [
        {
            title: 'ProFlex 100/100',
            download: 'Agreegated 100mbps',
            landmine: "1000'",
            equipment: 999
        },
        {
            title: 'ProFlex 300/300',
            download: 'Agreegated 300mbps',
            equipment: 1499
        },
        {
            title: 'ProFlex 500/500',
            download: 'Agreegated 500mbps',
            landmine: "1000'",
            equipment: 999
        },
        {
            title: 'ProFlex 1GB/1GB',
            download: 'Agreegated 1Gbps',
            landmine: "1000'",
            equipment: 999
        },
    ],
    // Pro
    [
      {
          title: 'Pro 100/100',
          download: 'Dedicated 100mbps',
          equipment: 1499
      },
      {
          title: 'Pro 300/300',
          download: 'Dedicated 300/300 Mbps',
          equipment: 1499
      },
      {
          title: 'Pro 500/500',
          download: 'Dedicated 500mbps',
          equipment: 1499
      },
  ],
  ]

  return (
    <section className='flex flex-col items-center justify-center md:mt-44 mt-20 text-white'>
      <header className='flex flex-col items-start justify-center max-w-[1200px] gap-4 mb-12 px-4'>
        <h3 className='font-medium md:text-2xl text-xl'>Προγράμματα</h3>
        <h2 className='font-extralight md:text-5xl text-3xl mt-10 md:mt-0 mb-4'>Professional</h2>
        <p className='font-light md:text-lg'>
        Πλοήγηση, εφαρμογές, Video&Audio streaming, 
        συστήματα ασφαλείας. Συνδυαστικά Προγράμματα 
        internet υπέρ-υψηλών ταχυτήτων & τηλεφωνίας για 
        εταιρικά δίκτυα. Ο ψηφιακός μετασχηματισμός κάθε
         επιχείρησης ξεκινά με τα νέα προγράμματα 
         Professional. Δημιούργησε αυτό που ταιριάζει 
         στα μέτρα της δικής σου με ταχύτητα internet
          1Gbps, τεχνική μελέτη του χώρου & άμεση 
          εγκατάσταση.
        </p>
      </header>
      <main className='overflow-hidden'>
        <Image
          src={'/professional-landing-nav.jpg'}
          alt='professional-landing'
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
              <Program key={program.id} progDetails={program}  middle={index == 1 ? true : false} activeBtn={true} />
          ))}
        </div>
        
        <div className='md:hidden w-full mt-10 mb-10 ml-4 programsSlider max-w-xs'>
          <Slider {...settings}>
            {programs.length > 0 && programs[activeBtn-1].map((program, index) => (
              <Program 
                key={program.id} 
                progDetails={program}  
                middle={index == 1 ? true : false} 
                activeBtn={true} 
              />
              ))}
          </Slider>
        </div> 
                
      </main>
    </section>
  )
}

export default page