import Image from 'next/image'
import React from 'react'

const CoverMap = () => {
  return (
    <section className='relative flex flex-col md:flex-row gap-28 items-start justify-center md:justify-start
                 text-white py-20 pb-60 px-6 md:px-96'>
        <div className='hidden md:flex flex-col gap-6 z-10'>
            <h2 className='font-regular text-4xl '>Κάλυψη</h2>
            <p className='font-regular max-w-sm'>Το δίκτυό της SkyTelecom προσφέρει πληθυσμιακή κάλυψη που
                 ξεπερνά το 50% στις περιοχές που καλύπτει, ενώ επεκτείνεται 
                 τάχιστα και σε νέες περιοχές της χώρας. Εκτός από υπερυψηλές 
                 ταχύτητες Internet έως και 1Gbps και άριστη ποιότητα σύνδεσης,
                 προσφέρει 100% κάλυψη ακόμα και στις πιο απομακρυσμένες περιοχές.
            </p>
        <button className='px-2 py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium hoverBg purpleBorder duration-700 ease-in-out 
                 text-center rounded-sm cursor-pointer mt-6'>
                Μάθε περισσότερα
            </button>
        </div>
        <div className='flex flex-col items-start
                 justify-start mt-12 gap-10 z-10'>
            <div>
                <h1 className='relative font-regular text-5xl'>
                    1000
                    <span className='absolute text-xl -top-1/3'>άδες</span>
                </h1>
                <p className='max-w-sm font-regular mt-4'>Συνδρομητές σε όλη την Ελλάδα</p>
            </div>
            <div>
            <h1 className='relative font-regular text-5xl'>
                    1
                    <span className='absolute text-4xl -top-1/3'>
                        Gbps</span>
                </h1>
                <p className='max-w-sm font-regular mt-4'>Έως 1Gbps σε οικιακούς πελάτες, επαγγελματίες & επιχειρήσεις κάθε τύπου και ανεξαρτήτως μεγέθους.</p>
            </div>
            <div>
            <h1 className='relative font-regular text-5xl'>
                    100
                    <span className='absolute text-4xl -top-1/3'>%</span>
                </h1>
                <p className='font-regular mt-4'>Πραγματικές ταχύτητες ίντερνετ</p>
            </div>
        </div>
        <div className='absolute z-0 top-[20%] md:top-0 md:right-[5%]'>
            <Image 
                src='/map.png'
                alt='map'
                width={400}
                height={400}
                className='md:h-[700px] md:w-[600px]'
            />
        </div>
        <button className='md:hidden flex px-2 py-[1.2rem] items-center justify-center z-8 font-regular
                   text-base font-medium hoverBg purpleBorder duration-700 ease-in-out 
                 text-center rounded-sm cursor-pointer mt-6'>
                Μάθε περισσότερα
            </button>
    </section>
  )
}

export default CoverMap