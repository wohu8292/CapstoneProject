import React from 'react'
import exampleImg from '../assets/exampleImg.jpg'
import Accordian from './Accordian'


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
                <div className='mt-20'>
                    <Accordian/>
                </div>
        </div>
    </section>
  )
}

export default Resources