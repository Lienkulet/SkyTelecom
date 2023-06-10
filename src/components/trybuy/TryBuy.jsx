import Image from 'next/image'
import React from 'react'

const TryBuy = () => {
  return (
    <section className='md:bg-white w-full flex 
             md:flex-row flex-col items-center justify-between mt-40 relative
             md:pt-[30rem] md:pb-[30rem]'>
        <div className=''>
            <Image
                src={'/cfiber_new1-1.svg'}
                width={900}
                height={404}
                className='md:absolute left-0 top-16 z-10'
            />
        </div>
        <div className='md:absolute top-72 -right-24 mainBg transofrm skew-x-12
                 md:h-[41.5rem] md:w-[62%] text-white
                flex items-center justify-start mt-10 md:mt-0'>            
            <div className='transform -skew-x-12 flex flex-col md:items-start 
                md:justify-start items-center justify-center
                     md:py-10 md:px-36 px-4 gap-6'>
            <header className='hidden md:flex flex-row items-center
                     text-5xl font-medium'>
                <h1 className='text-[#30a6ef]'>
                    Try
                </h1>
                <h1>
                    &
                </h1>
                <h1 className='text-[#c610c6]'>
                    buy
                </h1>
            </header>
            <h3 className='md:text-3xl text-xl font-medium'>
                Δοκίμασε εντελώς δωρεάν το πρόγραμμα
                 <br /> που σε ενδιαφέρει!
            </h3>
            <p className='md:text-base text-sm md:font-normal'>Είμαστε σίγουροι για την ποιότητα των προγραμμάτων μας. Γι’ αυτό σου 
                <br /> προσφέρουμε την 
                δυνατότητα να δοκιμάσεις εντελώς δωρεάν αυτό που σε
                 <br /> ενδιαφέρει, χωρίς καμία δέσμευση αγοράς.
            </p>
            <button className='px-[2rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium purpleBorder
                 text-center rounded-sm cursor-pointer md:switch-purpleGrad mt-4'>Κάντε αίτηση τώρα</button>
            </div>
        </div>
    </section>
  )
}

export default TryBuy