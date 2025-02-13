import React from 'react'
import Text_Image from './Text_Image'

const subPages = [
    {
        id: 1,
        label: 'Brainstorming',
        href: '#Brainstorming'
    }, {
        id: 2,
        label: 'Prototyping',
        href: '#Prototyping'
    }, {
        id: 3,
        label: 'Iteration',
        href: '#Iteration'
    }, {
        id: 4,
        label: 'Deliverables',
        href: '#Deliverables'
    }, {
        id: 5,
        label: 'Resources',
        href: '#Resources'
    }
];

const Home = () => {
    return (
        <section className='section'>
            <div className='container'>
                <h1 className='mb-5 font-bold text-3xl'>Home</h1>
                <div>
                    {subPages.map((object, index) => (<Text_Image name={object.label}/>))}
                </div>
            </div>
        </section>
    )
}

export default Home