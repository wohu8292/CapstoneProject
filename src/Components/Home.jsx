import React from 'react'
import HomeBody from './HomeBody'

const navList = [
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
        label: 'Reviews',
        href: '#Reviews'
    }, {
        id: 5,
        label: 'Deliverables',
        href: '#Deliverables'
    }, {
        id: 6,
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
                    {navList.map((object, index) => (<HomeBody name={object.label}/>))}
                </div>
            </div>
        </section>
    )
}

export default Home