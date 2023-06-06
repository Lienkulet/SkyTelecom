import Image from 'next/image'
import React from 'react'

const Programs = () => {
  return (
    <section className=' text-white md:mt-20'>
        <header className='flex flex-col items-center justify-center mb-6'>
            <h1 className='font-normal font-regular text-3xl mb-4'>Δημοφιλέστερα Προγράμματα</h1>
            <p className='font-regular text-center text-xs'>Επίλεξε το ιδανικό για σένα, για να απολαμβάνεις μοναδικές υπηρεσίες & προνόμια.</p>
        </header>
        <main className='flex flex-row w-full relative'>
            <Image 
                src='/omProgram.png'
                alt='omProgram'
                width={200}
                height={200}
                className='hidden md:flex '
            />
        </main>
    </section>
  )
}

export default Programs