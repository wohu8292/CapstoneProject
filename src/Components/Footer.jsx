import React from 'react'
import beBoulder from '../assets/Be Boulder + lockup_rev white.avif'

const Footer = () => {
    return (
        <footer className='pt-12 pb-10 lg:pt-4 lg:pb-14 font-arimo bg-black text-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid lg:grid-cols-2 gap-12 items-center py-4 text-center lg:text-start'>
                    {/* left footer */}
                    <div className='flex flex-col justify-center lg:justify-start'>
                        <h2 className='text-primaryGold text-base mb-3'>Sustainability in Projects</h2>
                        <ul className='text-sm'>
                            <li className='mb-1'><a href="#" className='text-primaryGold'>College of Engineering & Applied Sciences</a></li>
                            <li className='mb-1'>University of Colorado Boulder</li>
                            <li className='mb-1'>584 UCB</li>
                            <li className='mb-1'>Boulder, Colorado 80309-0584</li>
                        </ul>
                    </div>

                    {/* right footer */}
                    <div className='flex flex-col justify-center items-center lg:items-end'>
                        <div className='mb-3'>
                            <a href="#">
                                <img src={beBoulder} alt="#" width={202} className='w-40 sm:w-48 md:w-56' />
                            </a>
                        </div>
                        <ul className='text-sm text-center lg:text-right'>
                            <li className='mb-1'>© Regents of the University of Colorado</li>
                            <li className='mb-1'>Privacy • Legal & Trademarks • Campus Map</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer