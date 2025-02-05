import React from 'react'
import beBoulder from '../assets/Be Boulder + lockup_rev white.avif'


const Footer = () => {
    return (
        <footer className='pt-28 lg:pt-32 font-arimo'>
                <div className='lg:grid lg:grid-cols-2 justify-around bg-black pt-6 pb-6'>
                    {/* left footer */}
                    <div className='mx-32 my-5'>
                      <h2 className='text-primaryGold text-base mb-3'>Sustainability in Projects</h2>
                      <ul className='text-white text-sm'>
                        <li className='mb-1'><a href="#" className='text-primaryGold'>College of Engineering & Applied Sciences</a></li>
                        <li className='mb-1'>University of Colorado Boulder</li>
                        <li className='mb-1'>584 UCB</li>
                        <li className='mb-1'>Boulder, Colorado 80309-0584</li>
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
                          <li className='mb-1'>© Regents of the University of Colorado</li>
                          <li className='mb-1'>Privacy • Legal & Trademarks • Campus Map</li>
                        </ul>
                    </div>
                </div>
        </footer>
    )
}

export default Footer