'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const changeSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
    sliderRef.current.slickGoTo(slideIndex);
  };

  return (
    <section className="relative overflow-hidden max-w-full">
      {/* <div className="relative"> */}
      <h1>Ale</h1>
      <div className='hidden md:block'>
        <Slider {...settings} ref={sliderRef}>
          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/homebanners.jpg" 
              alt="homebanners" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-[65%] z-9 left-52 flex flex-col text-white items-start'>
                <h1 
                  className='font-medium text-5xl mb-2'
                  >Home, Business & Professional
                </h1>
                <p className='font-regular text-left text-lg mb-2'>
                  Άλλαξε την καθημερινότητά σου, με ταχύτητες Internet έως και 
                  <strong>1GBPS</strong>
                    !
                    <br />
                  Βρες το πρόγραμμα που σου ταιριάζει από 17,90€ και σέρφαρε απεριόριστα!
                </p>
                <button className='px-[4rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium
                 text-center rounded-sm cursor-pointer switch-purpleGrad mt-1
                  '>Ανακάλυψέ τα</button>
              </figcaption>
              <aside className="absolute top-[23%] right-0 bg-white p-4 pb-0 
                rounded-l-md h-[500px] w-fit overflow-hidden
               no-scrollbar flex flex-col z-10">
                <div className='flex flex-col items-center rounded-md overflow-x-hidden no-scrollbar gap-3'>
                <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-4 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-4xl leading-[1] 
                        font-extralight'>HomeAirFiber
                       <br /> Internet 24
                       </h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>17</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>24/2 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Εγκατάσταση</p>
                        <h3 className='font-regular text-lg'>ΔΩΡΕΑΝ</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>STATIC IP</p>
                        <h3 className='font-regular text-lg'>4,95€/Μήνα</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-4xl leading-[1] 
                        font-extralight'>HomeAirFiber
                       <br /> Internet 35
                       </h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>21</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>35/3 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Εγκατάσταση</p>
                        <h3 className='font-regular text-lg'>ΔΩΡΕΑΝ</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>STATIC IP</p>
                        <h3 className='font-regular text-lg'>4,95€/Μήνα</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  </div>
                  <div className='pt-3 bg-white'></div>
                </aside>
          </figure>
          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/homebanners2.jpg" 
              alt="homebanners2" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-[65%] z-9 left-52 flex flex-col text-white items-start'>
                <h1 
                  className='font-medium text-5xl mb-2'
                  >Ακόμα ψάχνεις;
                </h1>
                <p className='font-regular text-left text-lg mb-2'>
                Με την TRY&BUY υπηρεσία της SkyTelecom δοκιμάζεις το 
                πρόγραμμα που σου ταιριάζει
                    <br />
                    εντελώς ΔΩΡΕΑΝ,  χωρίς καμία δέσμευση αγοράς!
                </p>
                <button className='px-[3rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium
                 text-center rounded-sm cursor-pointer switch-purpleGrad mt-1
                  '>Κάνε αίτηση τώρα</button>
              </figcaption>
              <aside className="absolute top-[23%] right-0 bg-white p-3 pb-0 rounded-l-md h-[500px] 
                    overflow-hidden no-scrollbar flex flex-col z-10 ease-in-out duration-700">
                <div className='flex flex-col items-center rounded-md overflow-x-hidden no-scrollbar gap-3'>
                <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-4xl leading-[1] 
                        font-extralight'>HomeAirFiber
                       <br /> Internet 50
                       </h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>27</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>50/5 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Εγκατάσταση</p>
                        <h3 className='font-regular text-lg'>ΔΩΡΕΑΝ</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>STATIC IP</p>
                        <h3 className='font-regular text-lg'>4,95€/Μήνα</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-4xl leading-[1] 
                        font-extralight'>BusinessAirFiber
                       <br /> Internet 24
                       </h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>20</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>24/4 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Εγκατάσταση</p>
                        <h3 className='font-regular text-lg'>ΔΩΡΕΑΝ</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-3xl leading-[1] 
                      font-extralight'>ProFlex 500/500</h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>
                            Agreegated 500/500 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν λεπτά προς σταθερά</p>
                        <h3 className='font-regular text-lg'>1000</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>
                        100% Επιδότηση Εξοπλισμού</p>
                        <h3 className='font-regular text-md flex flex-row gap-1 items-center'>
                          Αξίας 
                          <span className='relative '>
                            1499€
                              <div className='oblique-line transform -rotate-x-180'></div>
                          </span>
                        </h3>
                      </li>
                      
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  </div>
                  <div className='pt-3 bg-white'></div>
                </aside>
          </figure>

          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/homebanners3.jpg" 
              alt="homebanners3" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-[65%] z-9 left-52 flex flex-col text-white items-start'>
                <h3 className='font-regular font-medium text-left text-lg'>ΜΟΝΟ ΓΙΑ ΕΣΕΝΑ!</h3>
                <h1 
                  className='font-medium text-5xl mb-2'
                  >MESH WIFI ROUTER με 29,90€/τμχ!
                </h1>
                <p className='font-regular text-left text-lg mb-2'>
                  Καλά διάβασες! Γίνε και εσύ μέλος της οικογένειας της SkyTelecom για να απολαμβάνεις
                    <br />
                  μοναδικά προνόμια!
                </p>
                <button className='px-[4rem] py-[1.2rem] items-center z-8 font-regular
                   text-base font-medium
                 text-center rounded-sm cursor-pointer switch-purpleGrad mt-1
                  '>Απόκτησέ το</button>
              </figcaption>
              <aside className='absolute top-[23%] right-0 bg-white p-3 pb-0 rounded-l-md h-[500px] overflow-hidden no-scrollbar  flex flex-col'>
                <div className='flex flex-col items-center rounded-md overflow-x-hidden no-scrollbar gap-3'>
              <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-3xl leading-[1] 
                      font-extralight'>HomeAirFiber
                       <br /> Double Play 24</h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f] 
                           font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>23</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>24/2 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>
                          Δωρεάν λεπτά προς σταθερά</p>
                        <h3 className='font-regular text-lg'>*Απεριόριστα</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f] 
                        font-regular opacity-100'>Δωρεάν λεπτά προς κινητά</p>
                        <h3 className='font-regular text-lg'>120</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f] 
                        font-regular opacity-100'>Με Χρέωση</p>
                        <h3 className='font-regular text-lg'>Ανά Δευτερόλεπτο</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-3xl leading-[1] 
                      font-extralight'>HomeAirFiber
                       <br /> Double Play 35</h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li className='mb-2'>
                        <p className='text-lg text-[#796e8f] 
                           font-regular opacity-100'>Από</p>
                        <h2 className='font-light text-4xl'> 
                          <span className='text-5xl font-normal'>26</span>
                          ,90€/το μήνα
                        </h2>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>35/3 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>
                          Δωρεάν λεπτά προς σταθερά</p>
                        <h3 className='font-regular text-lg'>Απεριόριστα</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f] 
                        font-regular opacity-100'>Δωρεάν λεπτά προς κινητά</p>
                        <h3 className='font-regular text-lg'>120</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Δωρεάν Δοκιμή Try&Buy</p>
                        <h3 className='font-regular text-lg'>3 ημέρες</h3>
                      </li>
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  <Link href={'/'} 
                        className='flex flex-col items-start bg-mainBg
                              p-3 gap-2 text-white w-[22rem] rounded-md'>
                    <header>
                      <h1 className='text-3xl leading-[1] 
                      font-extralight'>Pro 300/300</h1>
                    </header>
                    <ul className='flex flex-col gap-1'>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>Download/Upload</p>
                        <h3 className='font-regular text-lg'>
                            Dedicated 300/300 Mbps</h3>
                      </li>
                      <li>
                        <p className='text-lg text-[#796e8f]  font-regular opacity-100'>
                        100% Επιδότηση Εξοπλισμού</p>
                        <h3 className='font-regular text-md flex flex-row gap-1 items-center'>
                          Αξίας 
                          <span className='relative '>
                            1499€
                              <div className='oblique-line transform -rotate-x-180'></div>
                          </span>
                        </h3>
                      </li>
                      
                    </ul>
                    <button
                      className='border border-gray-300 rounded-md py-3 w-full
                          font-regular text-lg font-bold hover:border-transparent
                          hoverBg ease-in-out duration-500 mt-2
                    '>Το Θέλω!</button>
                  </Link>
                  </div>
                  <div className='pt-3 bg-white z-1'></div>
                </aside>
          </figure>
        </Slider>
      </div>

      <div className='block md:hidden pt-10'>
        <Slider {...settings} ref={sliderRef}>
          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/01_mobile.jpg" 
              alt="01_mobile" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-4 z-9 left-0 right-0 flex 
                flex-col text-white items-center justify-center text-center'>
                <h1 
                  className='font-medium text-2xl mb-2'
                  >Home, Business & Professional
                </h1>
                <p className='font-regular text-center text-base max-w-[320px] mb-2'>
                  Άλλαξε την καθημερινότητά σου, με ταχύτητες Internet έως και 
                  <strong>1GBPS</strong>
                    !
                  Βρες το πρόγραμμα που σου ταιριάζει από 17,90€ και σέρφαρε απεριόριστα!
                </p>
                <button className='
                  px-[3.3rem] py-[0.95rem] items-center z-8 font-regular text-lg font-medium
                  text-center rounded-sm cursor-pointer switch-purpleGrad mt-52
                  '>Ανακάλυψέ τα</button>
              </figcaption>
              
          </figure>
          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/02_mobile.jpg" 
              alt="02_mobile" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-4 z-9 left-0 right-0 flex 
                flex-col text-white items-center justify-center text-center'>
                <h1 
                  className='font-medium text-2xl mb-2'
                  >Ακόμα ψάχνεις;
                </h1>
                <p className='font-regular text-center text-base mb-2 max-w-[320px]'>
                Με την TRY&BUY υπηρεσία της SkyTelecom δοκιμάζεις το 
                πρόγραμμα που σου ταιριάζει
                    <br />
                    εντελώς ΔΩΡΕΑΝ,  χωρίς καμία δέσμευση αγοράς!
                </p>
                <button className='
                px-[2.5rem] py-[0.90rem] items-center z-8 font-regular text-lg font-medium
                text-center rounded-sm cursor-pointer switch-purpleGrad mt-52
                  '>Κάνε αίτηση τώρα</button>
              </figcaption>
              
          </figure>

          <figure className="relative ease-in-out duration-500">
            <Image 
              src="/03_mobile.jpg" 
              alt="03_mobile" 
              width={1900} 
              height={831} />
              <figcaption className='heroDescCaption absolute top-4 z-9 left-0 right-0 flex 
                flex-col text-white items-center justify-center text-center'>
                <h3 className='font-regular font-medium text-left text-lg'>ΜΟΝΟ ΓΙΑ ΕΣΕΝΑ!</h3>
                <h1 
                  className='font-medium text-2xl mb-2'
                  >MESH WIFI ROUTER με <br /> 29,90€/τμχ!
                </h1>
                <p className='font-regular text-center text-base mb-2 max-w-[360px]'>
                  Καλά διάβασες! Γίνε και εσύ μέλος της οικογένειας της SkyTelecom για να απολαμβάνεις
                  μοναδικά προνόμια!
                </p>
                <button className='px-[3.4rem] py-[0.90rem] items-center z-8 font-regular text-lg font-medium
                 text-center rounded-sm cursor-pointer switch-purpleGrad mt-36
                  '>Απόκτησέ το</button>
              </figcaption>
          </figure>
        </Slider>
      </div>

        <div className="md:flex hidden absolute top-1/2 left-3 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <div className={`rounded-full bg-cover cursor-pointer`} onClick={() => changeSlide(0)}>
              <Image src="/heroRound.png" alt="heroRound" width={46} height={45} className={`rounded-full bg-cover cursor-pointer `} />
            </div>
            <div className={`rounded-full bg-cover cursor-pointer`} onClick={() => changeSlide(1)}>
              <Image src="/heroRound2.png" alt="heroRound2" width={46} height={35} className={`rounded-full bg-cover cursor-pointer`} />
            </div>
            <div className={`rounded-full bg-cover cursor-pointer`}  onClick={() => changeSlide(2)}>
              <Image src="/heroRound3.png" alt="heroRound3" width={46} height={35} className={`rounded-full bg-cover cursor-pointer `} />
            </div>
          </div>
        </div>

        
      {/* </div> */}
    </section>
  );
};

export default Hero;
