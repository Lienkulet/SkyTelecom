import Image from 'next/image'
import React from 'react'

const CallService = () => {
  return (
    <section className='flex flex-col md:flex-row items-center md:justify-start 
              justify-center
                md:gap-40 md:pt-40 pt-10 text-white md:pl-96'>
        <Image 
            src={'/headphone_om.png'}
            alt='headphone_om.png'
            width={350}
            height={250}
        />
        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-5'>
            <h1 className='text-4xl font-regular font-normal'>Υπηρεσία Call me Back</h1>
            <p className='font-regular md:text-left text-center'>Συμπλήρωσε τα στοιχεία σου & ο πρώτος διαθέσιμος <br /> εκπρόσωπός μας θα σε καλέσει άμεσα!</p>
            <button className='px-[1.6rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium hoverBg purpleBorder hover:text-white duration-700 ease-in-out 
                 text-center rounded-sm cursor-pointer mt-6'>
                Συμπλήρωσε τα στοιχεία σου
            </button>
        </div>
    </section>
  )
}

export default CallService