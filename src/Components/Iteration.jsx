import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'
import Text_Image from './Text_Image'
import Image_Text from './Image_Text'
import Text from './Text'

const cardData = [
    {
        id:1,
        img:exampleImg,
        title:'What is prototyping',
        text:'Brainstorming is a creative problem-solving technique where individuals or groups generate a wide range of ideas through open, unfiltered discussions.'
    },
    {
        id:2,
        img:exampleImg,
        title:'Ways to prototyping',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas.'
    },
    {
        id:2,
        img:exampleImg,
        title:'Ways to prototyping',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas.'
    }
]

const Iteration = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h1 className='mb-5 font-bold text-3xl'>Iteration</h1>
            <div>
                <Text />
            </div>

            {/* cards */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 cursor-pointer px-8'>
                {cardData.map((cardInfo) => (
                    <div key={cardInfo.id} className='p-4 bg-primaryLightGray/50 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105'>
                        <img src={cardInfo.img} alt="" className='w-full h-40 object-cover'/>
                        <div className='p-4'>
                            <h3 className='font-semibold text-lg text-gray-800'>{cardInfo.title}</h3>
                            <p className='text-sm text-gray-600 mt-3'>{cardInfo.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* body */}
            <div className='my-32 grid grid-rows-2 gap-24'>
                <Text_Image name="How to be more sustainable in brainstorming"/>
                <Image_Text name="How success in brainstorming is defined "/>
            </div>
        </div>
    </section>
  )
}

export default Iteration