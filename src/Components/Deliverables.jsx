import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'
import Text_Image from './Text_Image'
import Image_Text from './Image_Text'

const cardData = [
    {
        id:1,
        img:exampleImg,
        title:'What is deliverables',
        text:'Brainstorming is a creative problem-solving technique where individuals or groups generate a wide range of ideas through open, unfiltered discussions. It encourages participants to think freely and share diverse perspectives to explore potential solutions.'
    },
    {
        id:2,
        img:exampleImg,
        title:'Ways to deliverables',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas. Techniques such as asking "what if" questions, role-playing, or combining and modifying existing ideas can also help generate creative solutions.'
    },
    {
        id:3,
        img:exampleImg,
        title:'Ways to deliverables',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas. Techniques such as asking "what if" questions, role-playing, or combining and modifying existing ideas can also help generate creative solutions.'
    }
]

const Deliverables = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h1 className='mb-5 font-bold text-3xl'>Deliverables</h1>
            <div className='mt-20'>
                <Text_Image />
            </div>

            {/* cards */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-32 cursor-pointer'>
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

export default Deliverables