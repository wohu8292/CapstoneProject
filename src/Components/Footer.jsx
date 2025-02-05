import React from 'react'
import beBoulder from '../assets/Be Boulder + lockup_rev white.avif'

const sitemap = [
    {
        label: 'Brainstorming',
        href: '#Brainstorming'
    }, {
        label: 'Prototyping',
        href: '#Prototyping'
    }, {
        label: 'Iteration',
        href: '#Iteration'
    }, {
        label: 'Reviews',
        href: '#Reviews'
    }, {
        label: 'Deliverables',
        href: '#Deliverables'
    }, {
        label: 'Resources',
        href: '#Resources'
    }
];

const socials = [
    {
        label: 'Distribution Center',
        href: 'https://www.colorado.edu/fm/divisions/dc'
    }, {
        label: 'Instagram',
        href: 'https://www.instagram.com/cuecoreps/'
    }
];

const Footer = () => {
    return (
        <footer className='pt-28 lg:pt-32 font-arimo'>
                <div className='lg:grid lg:grid-cols-2 justify-around bg-black pt-6 pb-6'>
                    {/* left footer */}
                    <div className='mx-32 my-5'>
                      <h2 className='text-primaryGold text-base mb-3'>Sustainability in Projects</h2>
                      <ul className='text-white text-sm'>
                        <li><a href="#" className='text-primaryGold'>College of Engineering & Applied Sciences</a></li>
                        <li>University of Colorado Boulder</li>
                        <li>584 UCB</li>
                        <li>Boulder, Colorado 80309-0584</li>
                      </ul>
                    </div>

                    {/* right footer */}
                    <div className=''>
                        <div>
                            <a href="#">
                                <img src={beBoulder} alt="#" width={269}/>
                            </a>
                        </div>
                        <ul className='text-white text-sm'>
                          <li>© Regents of the University of Colorado</li>
                          <li>Privacy • Legal & Trademarks • Campus Map</li>
                        </ul>
                    </div>
                </div>
        </footer>
    )
}

export default Footer