import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'
import Text_Image from './Text_Image'
import Image_Text from './Image_Text'

const cardData = [
    {
        id:1,
        img:exampleImg,
        title:'What is brainstorming',
        text:'Brainstorming is a creative problem-solving technique where individuals or groups generate a wide range of ideas through open, unfiltered discussions. It encourages participants to think freely and share diverse perspectives to explore potential solutions.'
    },
    {
        id:2,
        img:exampleImg,
        title:'Ways to brainstorm',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas. Techniques such as asking "what if" questions, role-playing, or combining and modifying existing ideas can also help generate creative solutions.'
    },
    {
        id:2,
        img:exampleImg,
        title:'Ways to brainstorm',
        text:'Brainstorming can be done through methods like mind mapping, free writing, group discussions, or using prompts to spark ideas. Techniques such as asking "what if" questions, role-playing, or combining and modifying existing ideas can also help generate creative solutions.'
    }
]

const Resources = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h1 className='mb-5 font-bold text-3xl'>Resources</h1>
            <div>
                <Text_Image />
            </div>

            {/* cards */}
            <div className='flex justify-between w-4/8 my-24 gap-5'>
                {cardData.map((cardInfo)=>(
                    <div
                    key={cardInfo.id}
                    className='w-96'>
                        <div className='p-5 rounded-xl bg-primaryLightGray/50 flex flex-col h-full'>
                            <img src={cardInfo.img} alt="" className='rounded-xl w-full h-40 object-cover'/>
                            <div className='mt-3'>
                                <h3 className='font-semibold text-lg'>{cardInfo.title}</h3>
                                <p className='text-sm text-gray-600 mt-3'>{cardInfo.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* body */}
            <div className='mt-14 grid grid-rows-2 gap-9'>
                <Text_Image name="How to be more sustainable in brainstorming"/>
                <Image_Text name="How success in brainstorming is defined "/>
            </div>
        </div>
    </section>
  )
}

export default Resources