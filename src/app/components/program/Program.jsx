import Link from 'next/link'
import React from 'react'

const Program = ({progDetails, middle, activeBtn}) => {

    return (
       
        <Link href={'/'}
            className={`flex flex-col ${activeBtn? ' min-h-[20rem] ' : ' md:min-h-[32rem] min-h-[34rem] '} items-start ${middle? ' programBg ' : ' bg-[#281140] '}
                            p-3 gap-2 text-white w-72  md:w-80 rounded-md`}>
            <header>
                <h1 className='text-4xl leading-[1]
                                            font-extralight'>{progDetails?.title}
                    {progDetails?.br? (
                    <>
                        <br /> {progDetails?.br}
                    </>
                    ) : ''}
                </h1>
            </header>
            <ul className='flex flex-col gap-1'>
                {progDetails?.price && <li className='mb-2'>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'} 
                     font-regular opacity-100`}>Από</p>
                    <h2 className='font-light text-4xl'>
                        <span className='text-5xl font-normal'>{progDetails?.price}</span>
                        ,90€/το μήνα
                    </h2>
                </li>
                }
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'} 
                         font-regular opacity-100`}>Download/Upload</p>
                    <h3 className='font-regular text-xl'>{progDetails?.download}</h3>
                </li>
                {progDetails?.install && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'}
                          font-regular opacity-100`}>Εγκατάσταση</p>
                    <h3 className='font-regular text-xl'>{progDetails?.install}</h3>
                </li>
                }
                {progDetails?.ip && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'}
                          font-regular opacity-100`}>STATIC IP</p>
                    <h3 className='font-regular text-xl'>{progDetails?.ip}</h3>
                </li>
                }
                {progDetails?.landmine && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'}
                          font-regular opacity-100`}>
                          Δωρεάν λεπτά προς σταθερά</p>
                    <h3 className='font-regular text-xl'>{progDetails?.landmine}</h3>
                </li>
                }
                {progDetails?.mobile && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'} 
                        font-regular opacity-100`}>Δωρεάν λεπτά προς κινητά</p>
                    <h3 className='font-regular text-xl'>{progDetails?.mobile}</h3>
                </li>
                }
                {progDetails?.equipment && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'}  
                    font-regular opacity-100`}>
                        100% Επιδότηση Εξοπλισμού</p>
                        <h3 className='font-regular text-2xl flex flex-row gap-1 items-center'>
                          Αξίας 
                          <span className='relative text-2xl'>
                            {progDetails?.equipment}
                              <div className='oblique-line h-4 transform -rotate-x-180'></div>
                          </span>
                        </h3>
                </li>
                }
                {progDetails?.tryBuy && 
                <li>
                    <p className={`text-xl ${middle?  ' text-[#c8c3e2] ' : 'text-[#796e8f]'}
                      font-regular opacity-100`}>Δωρεάν Δοκιμή Try&Buy</p>
                    <h3 className='font-regular text-xl'>{progDetails?.tryBuy}</h3>
                </li>
                }
            </ul>
            <button className='border border-gray-300 rounded-md py-3 w-full
                                          font-regular text-xl font-bold hover:border-transparent
                                          hoverBg ease-in-out duration-500 mt-2
                                    '>Το Θέλω!</button>
        </Link>
    )
}

export default Program
