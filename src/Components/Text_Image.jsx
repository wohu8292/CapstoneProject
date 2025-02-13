import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'

const HomeBody = ({name}) => {
  return (
    <div className='mb-3 px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 items-center gap-6'>
            <div className='flex flex-col justify-center text-center md:text-left md:order-1 order-2'>
                <h2 className='text-lg font-bold py-2'>{name}</h2>
                <p className='text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor voluptatibus cupiditate nam consectetur dolore repudiandae beatae laboriosam ratione necessitatibus. Repellendus suscipit quis ipsum sapiente? Voluptas animi minus recusandae voluptatem! Lor
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='order-1 md:order-2 flex justify-center'>
              <img src={exampleImg} alt="#" width={124} className='w-32' />
            </div>
        </div>
    </div>
  )
}

export default HomeBody
