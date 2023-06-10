import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle, AiOutlineRight } from 'react-icons/ai'

const SmartHome = () => {
  return (
    <section className='hidden md:flex flex-row gap-20  justify-center bg-white pt-32'>
        <div className='flex flex-col items-start w-fit px-10'>
        <div className='flex flex-col items-start gap-8 mb-16 mt-20'>
            <Image 
                src={'/smartHome.png'}
                alt='smartHome'
                width={250}
                height={250}
            />
            <p className='text-base font-regular'>Smart Home χωρίς γρήγορο & αξιόπιστο Internet δε γίνεται! Σε <br />μία εποχή που αλλάζει, 
                το σπίτι μας γίνεται πλέον πιο φιλικό, <br />λειτουργικό & ενεργειακά αποδοτικό από ποτέ.
                 <span className='underline'> Επένδυσε στα <br /> πρόγραμματα </span>
                 Internet της SkyTelecom που ταιριάζει στις <br />ανάγκες σου, 
                 σύνδεσε τις έξυπνες συσκευές σου με τον Mesh <br /> εξοπλισμό που σου
                  προσφέρουμε & ζήσε την εμπειρία.
            </p>
            <button className='px-[3.5rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium hoverBg purpleBorder hover:text-white duration-700 ease-in-out 
                 text-center rounded-sm cursor-pointer'>Μάθε περισσότερα</button>
        </div>
        <Link href={'/'} className='smartHomeLink border-b-2 border-gray-200 pb-4 mb-10 w-full'>
            <h2 className='text-4xl font-regular'>Mesh WiFi</h2>
            <div className='flex flex-row items-center justify-between mt-2'>
                <p className='text-base font-regular'>Μόνο η SkyTelecom συνοδεύει κάθε <br /> 
                    της πρόγραμμα με κορυφαίο Mesh εξοπλισμό!</p>
                <div className='w-fit p-2 rounded-full smartHome'>
                    <AiOutlineRight size={'1.5rem'} />
                 </div>
             </div>
        </Link>
        <Link href={'/'} className='smartHomeLink border-b-2 border-gray-200 pb-4 mb-10 w-full'>
            <h2 className='text-4xl font-regular'>Φτιάξε το δικό σου <br /> Έξυπνο Σπίτι!</h2>
            <div className='flex flex-row items-center justify-between mt-2'>
                <p className='text-base font-regular'>Μάθε πώς να ελέγχεις & να διαχειρίζεσαι τους <br />
                 εσωτερικούς & εξωτερικούς του χώρους με <br /> λύσεις Smart Home!</p>
                 <div className='w-fit p-2 rounded-full smartHome'>
                    <AiOutlineRight size={'1.5rem'} />
                 </div>
            </div>
        </Link>
        </div>
        <div className='w-fit h-fit ml-10 p-4 border border-[#c610c6] rounded-full relative'>
            <div className='relative w-fit h-fit'>
            <Image 
                src='/smart_home_banner.png'
                width={550}
                height={550}
                className=''
                />
            <div className='bg-mainBg absolute w-full h-full bg-opacity-50 rounded-full top-0 '></div>
            </div>
            <div className='absolute top-12 -left-4 flex flex-row 
                items-center bg-mainBg text-white rounded-2xl gap-4
                py-2  pr-8 pl-4 bg-opacity-90'>
                <div className='relative w-fit'>
                <Image
                    src='/heating_img.png'
                    alt='heating_img.png'
                    width={60}
                    height={40}
                    className='rounded-full'
                />
                <div className='absolute top-0 right-0 z-10 text-green-400'>
                    <AiFillCheckCircle size={'1.5rem'} />
                </div>
                </div>
                <p>Έλεγχος θέρμανσης</p>
            </div>
            <Image 
                src='/om_camera.png'
                alt='om_camera'
                width={180}
                height={180}
                className='absolute -top-20 right-14'
            />
            <Image 
                src='/om_soundbar.png'
                alt='om_soundbar'
                width={200}
                height={180}
                className='absolute bottom-20 -left-3'
            />
            <div className='absolute -bottom-12  right-0 flex
                 flex-col items-start bg-mainBg text-white
                  rounded-2xl gap-4 py-10 pb-14 px-6 bg-opacity-90'>
                <div className='relative w-fit'>
                <Image
                    src='/camera-img.png'
                    alt='camera-img.png'
                    width={60}
                    height={40}
                    className='rounded-full'
                />
                </div>
                <h4 className='text-base font-regular'>Camera</h4>
                <p className='text-base font-regular text-gray-400'>Συστήματα ασφαλείας και <br />φωνητικών εντολών</p>
            </div>
        </div>
    </section>
  )
}

export default SmartHome