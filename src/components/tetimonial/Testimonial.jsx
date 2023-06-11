import React from 'react'
import { ImQuotesRight } from 'react-icons/im'
import Image from 'next/image';

const Testimonial = ({ testimonial: { image, desc, width, height } }) => {
  return (
    <div className='flex flex-col relative min-h-[24rem] w-96 shadow-md border my-6 p-4'>
        <div className='absolute -top-6 left-4 border w-fit'>
          <Image
            src={image}
            width={width}
            height={height}
          />
        </div>
        <div className='absolute -top-6 right-6 text '>
          <ImQuotesRight size={'3rem'} className='testimonial' />
        </div>
        <p className='mt-20'>{desc}</p>
    </div>
  )
}

export default Testimonial