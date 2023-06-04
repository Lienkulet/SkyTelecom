'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const spanRef = useRef(null);
    const ulRef = useRef(null);

  const handleSpanMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleSpanMouseLeave = () => {
    setTimeout(() => {
      if (
        spanRef.current &&
        ulRef.current &&
        !spanRef.current.contains(document.activeElement) &&
        !ulRef.current.contains(document.activeElement)
      ) {
        setShowSubMenu(false);
      }
    }, 200);
  };

  const handleSubMenuMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleSubMenuMouseLeave = () => {
    setShowSubMenu(false);
  };
  return (
    <header>
        <div className='px-8 pt-2 py-1 flex flex-row items-center justify-end text-white'>
            <BiSearchAlt2 size={'25px'} />
        </div>
        <nav className='px-8 bg-white flex flex-row items-center justify-between'>
            <div className='flex flex-row gap-11 items-center '>
                <Link href={'/'}>
                    <Image 
                        src='/sky.png'
                        alt='sky'
                        width={220}
                        height={30}
                    />  
                </Link>
                <ul className='hidden md:flex flex-row justify-between gap-11 text-[#000] font-semibold text-sm'>
                    <li  
                        className='relative'
                        onMouseEnter={handleSpanMouseEnter}
                        onMouseLeave={handleSpanMouseLeave}
                    >
                            <span
                                ref={spanRef}
                                className='hover:text-[#30A6EF] hover:border-b-4 hover:border-[#30A6EF]
                                 cursor-pointer hover:pb-2 absolute 
                                 
                                 ease-in-out duration-200'   
                            >   
                                Προγραμμάτα
                            </span>
                        </li>
                    <li>
                        <Link href={'/tryandbuy'}
                            className='hover:text-[#30A6EF] pl-24 ease-in-out duration-200'>Try&buy</Link>
                    </li>
                    <li>
                        <Link href={'/company/store-locator'}
                            className='hover:text-[#30A6EF] ease-in-out duration-200'>Δίκτυο</Link>
                    </li>
                    <li>
                        <Link href={'/online-pliromi-logariasmou-checkout'} 
                            className='text-[#30A6EF] ease-in-out duration-200'>Online Πληρωμή</Link>
                    </li>
                </ul>      
            </div>
            <HiOutlineMenuAlt4 size={'2rem'} />
        </nav>
        { showSubMenu &&
        <ul className='bg-white px-8 py-10 flex flex-row items-center justify-between gap-6
            transition-all 
            ease-in-out duration-1000'
            // ref={ulRef}
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
        >
            <li className='w-full'>
                <Link href={'/kathgoria-programmata/home'} 
                    className='flex flex-col gap-1'>
                    <div className='relative rounded-xl p-[2px] bg-transparent image-container'>
                     <div className='overflow-hidden relative rounded-xl p-[2px] bg-transparent image-container'>
                    <Image 
                        src={'/home-landing-nav.jpg'}
                        alt='home-landing-nav'
                        width={600}
                        height={150}
                        className='rounded-xl image-nav ease-in-out duration-500'
                        />
                        </div>
                    </div>
                    <h1 className='font-semibold text-md'>Home</h1>
                </Link>
            </li>
            <li className=' w-full'>
                <Link href={'/kathgoria-programmata/business'} 
                    className='flex flex-col gap-1 '>
                    <div className='relative rounded-xl p-[2px] bg-transparent image-container'>
                     <div className='overflow-hidden relative rounded-xl p-[2px] bg-transparent image-container'>
                    <Image 
                        src={'/business-landing-nav.jpg'}
                        alt='business-landing-nav'
                        width={600}
                        height={150}
                        className='rounded-xl image-nav ease-in-out duration-500'
                        />
                        </div>
                    </div>
                    <h1 className='font-semibold text-md'>Business</h1>
                </Link>
            </li>
            <li className=' w-full'>
                <Link href={'/kathgoria-programmata/professional'} 
                    className='flex flex-col gap-1 '>
                     <div className='relative rounded-xl p-[2px] bg-transparent image-container'>
                     <div className='overflow-hidden relative rounded-xl p-[2px] bg-transparent image-container'>
                    <Image 
                        src={'/professional-landing-nav.jpg'}
                        alt='professional-landing-nav'
                        width={600}
                        height={150}
                        className='rounded-xl image-nav ease-in-out duration-500'
                        />
                        </div>
                    </div>
                    <h1 className='font-semibold text-md'>Professional</h1>
                </Link>
            </li>
        </ul>
}
    </header>
  )
}

export default Navbar