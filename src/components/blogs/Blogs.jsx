'use client'
import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import Slider from 'react-slick';

const Blogs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
    const blogs = [
        {
            image: '/paketa-internet-gia-to-spiti-xwris-stathero.jpg',
            title: 'Πακέτα ίντερνετ για το σπίτι χωρίς σταθερό από τη SkyTelecom! ',
            date: 'Απρ 09, 2023',
            summary: 'Πακέτα ίντερνετ για το σπίτι χωρίς σταθερό: Μία επιλογή που αναζητούν όλο και περισσότεροι στις μέρες μας – κυρίως οι...'
        },
        {
            image: '/entopismos-kinitou-mesw-google-maps.jpg',
            title: 'Εντοπισμός κινητού μέσω Google Maps γρήγορα και απλά ',
            summary: 'Εντοπισμός κινητού μέσω Google Maps, της εφαρμογής που αποτελεί έχει επιφέρει μεγάλες αλλαγές στην καθημερινότητά μας. Ο εντοπισμός κινητού μέσω...',
            date: 'Απρ 08, 2023'
        },
        {
            image: '/exwteriki-keraia-wifi.jpg',
            title: 'Εξωτερική κεραία Wifi ή…. SkyTelecom ',
            date: 'Απρ 05, 2023',
            summary: 'Εξωτερική κεραία WiFi: ένα δημοφιλές εργαλείο για τη βελτίωση της ασύρματης σύνδεσης στο σπίτι ή το γραφείο σου. Προσφέρει τη...'
        },
    ]

  return (
    <section className='flex  flex-col items-center justify-center md:bg-white
     md:text-black text-white bg-mainBg pt-4 md:pt-40 pb-20'>
    <header className='flex flex-col items-center justify-center gap-2 mb-14'>
      <h1 className='text-5xl'>Blog</h1>
      <p className='text-lg'>Μάθε τα πάντα γύρω από την επικοινωνία σου!</p>
    </header>
    <div className='hidden md:flex flex-row items-start justify-center gap-10'>
      {blogs.length > 0 && blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    <div className='md:hidden flex items-center justify-center py-4 mt-11 subHero'>
    <Slider {...settings}>
    {blogs.length > 0 && blogs.map((blog) => (
      <div className='mx-4 max-w-[22rem]'>
        <BlogCard key={blog.id} blog={blog} />
      </div>
      ))}
    </Slider>
    </div>
    <button className='px-[3.5rem] py-[1rem] items-center z-8 font-regular
               text-base font-medium hoverBg purpleBorder hover:text-white duration-100 ease-in-out 
             text-center rounded-md cursor-pointer mt-16'>
            Διάβασε περισσότερα
    </button>
</section>
  )
}

export default Blogs