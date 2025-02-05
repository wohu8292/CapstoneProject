import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'

const HomeBody = () => {
  return (
    <div className='container mb-3'>
        <div className='grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor voluptatibus cupiditate nam consectetur dolore repudiandae beatae laboriosam ratione necessitatibus. Repellendus suscipit quis ipsum sapiente? Voluptas animi minus recusandae voluptatem! lor
                </p>
            </div>
            <img src={exampleImg} alt="#" width={154} className='justify-self-end'/>
        </div>
    </div>
  )
}

export default HomeBody