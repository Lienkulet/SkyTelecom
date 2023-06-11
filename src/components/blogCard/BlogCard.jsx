import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blog: { image, title, summary, date } }) => {
  return (
    <figure className='flex flex-col gap-4 max-w-sm cursor-pointer'>
        <div className='overflow-hidden'>
        <Image
            src={image}
            width={400}
            height={400}
            className='hover:scale-110 duration-300 ease-in '
            />
        </div>
        <figcaption className='flex flex-col gap-2'>
            <h1 className='font-semibold text-black text-2xl'>{title}</h1>
            <p className='text-lg font-light'>{summary}</p>
            <time className='text-sm font-light'>{date}</time>    
        </figcaption>
    </figure>
  )
}

export default BlogCard