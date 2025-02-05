import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'

const HomeBody = ({name}) => {
  return (
    <div className=' mb-3'>
        <div className='grid md:grid-cols-2'>
            <div className='flex flex-col justify-center md:order-1 order-2'>
                <h2 className='text-lg font-bold py-2'>{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor voluptatibus cupiditate nam consectetur dolore repudiandae beatae laboriosam ratione necessitatibus. Repellendus suscipit quis ipsum sapiente? Voluptas animi minus recusandae voluptatem! lor
                </p>
            </div>
            <div className='order-2 md:order-1'>
              <img src={exampleImg} alt="#" width={124} className='justify-self-end'/>
            </div>
        </div>
    </div>
  )
}

export default HomeBody