import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { TfiLinkedin } from 'react-icons/tfi'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col py-32 pb-6 overflow-hidden w-full'>
        <header className='flex flex-col relative w-full '>
          <div className='flex md:hidden flex-col items-center justify-center
              mb-16 text-white'>
            <h2>Εγγράψου στο newsletter μας</h2>
            <p>Για να μάθεις 1ος για τα νέα & τις προσφορές μας!</p>
          </div>
            <div className='absolute md:-top-10 md:left-[47%] w-fit p-10
                top-20 left-28   bg-white rounded-full 
                footerShadow hover:scale-125 duration-500 ease-in-out '>
              <AiOutlineMail size={'4rem'} className='md:testimonial'/> 
            </div>
            <p className='hidden md:flex text-5xl font-regular text-white footerSlide'>Εγγράψου στο newsletter μας & μάθε 1ος για τα νέα & τις προσφορές μας!</p>
        </header>
        <div className='mt-40 md:mx-[22rem] border border-l-0 border-r-0 border-gray-400 max-w-[1200px]
                    flex flex-col'>
        <div className='hidden md:flex flex-row items-start justify-between py-16 px-20 pr-36'>
          <ul className='flex flex-col gap-4 text-sm'>
          <li className='text-xl text-white font-semibold mb-2'>SkyTelecom</li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
              <Link href='https://skytelecom.gr/company/'>Εταιρεία</Link>
              </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
              <Link href='https://skytelecom.gr/company/kalipsi/'>Κάλυψη</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
              <Link href='https://skytelecom.gr/company/store-locator/'>Καταστήματα</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
              <Link href='https://skytelecom.gr/company/egrapsan-gia-emas/'>Έγραψαν</Link>
             για μας</li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
              <Link href='https://skytelecom.gr/category/career/'>Καριέρα</Link>
            </li>
          </ul>
          
          <ul className='flex flex-col gap-4 text-sm'>
          <li className='text-xl text-white font-semibold mb-2'>Υποστήριξη</li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/company/faq/'}>Συχνές ερωτήσεις</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/online-pliromi-logariasmou-checkout/'}>Online πληρωμή</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/aitisi-neas-sindesis/'}>Νέα αίτηση</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/terms-conditions/'}>Όροι & προϋποθέσεις</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/cookies-policy/'}>Πολιτική cookies</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'https://skytelecom.gr/privacy-policy/'}>Πολιτική ιδιωτικότητας</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer mt-2'>Ρυθμίσεις Cookies</li>
          </ul>

          <ul className='flex flex-col gap-4 text-sm'>
          <li className='text-xl text-white font-semibold mb-2'>Προγράμματα</li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'/kathgoria-programmata/home'}>Home</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'/kathgoria-programmata/professional'}>Professional</Link>
            </li>
          <li className='hover:text-[#30a6ef] text-white cursor-pointer'>
            <Link href={'/kathgoria-programmata/business'}>Business</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between pt-4 pb-10'>
          <Image 
            src={'/logo_footer.svg'}
            width={200}
            height={200}
          />
          <div className='flex  flex-row gap-4'>
            <div className='rounded-full p-2 border-2 border-white text-white 
                  hover:border-[#30a6ef] hover:text-purple-700 cursor-pointer'>
              <FaFacebookF size={'1.8rem'} />
          </div>
          <div className='rounded-full p-2 border-2 border-white text-white 
                hover:border-[#30a6ef] hover:text-purple-700 cursor-pointer'>
              <AiOutlineInstagram size={'1.8rem'} />
          </div>
          <div className='rounded-full p-2 border-2 border-white text-white 
                hover:border-[#30a6ef] hover:text-purple-700 cursor-pointer'>
              <TfiLinkedin size={'1.8rem'} />
          </div>
        </div>
        </div>
        </div>
        <div className='flex flex-col text-center items-center md:flex-row justify-between text-white max-w-[1200px] md:mx-[22rem] mt-4 text-sm font-regular'>
            <p>Copyright © 2023 skytelecom.gr - All rights reserved. | 
                <Link href={'https://skytelecom.gr/terms-of-use/'} className='hover:text-[#30a6ef]'> Terms & Conditions</Link>
            </p>
            <p>Made by 
              <Link href={'https://github.com/Lienkulet'} className='hover:text-[#30a6ef] ml-1 text-base'>Lienkulet</Link>
            </p>
        </div>
    </footer>
  )
}

export default Footer