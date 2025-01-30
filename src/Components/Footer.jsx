import React from 'react'
import { FaBeer } from 'react-icons/fa';

const sitemap = [
    {
      label: 'Brainstorming',
      href: '#Brainstorming'
    },
    {
      label: 'Prototyping',
      href: '#Prototyping'
    },
    {
      label: 'Iteration',
      href: '#Iteration'
    },
    {
      label: 'Reviews',
      href: '#Reviews'
    },
    {
      label: 'Deliverables',
      href: '#Deliverables'
    },
    {
      label: 'Resources',
      href: '#Resources'
    }
  ];
  
  const socials = [
    {
      label: 'Distribution Center',
      href: 'https://www.colorado.edu/fm/divisions/dc'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/cuecoreps/'
    },
  ];

const Footer = () => {
  return (
    <footer className='pt-28 lg:pt-32'>
        <div className="">

            <div className='lg:grid lg:grid-cols-2 bg-black'>
                {/* title & button */}
                <div className='mb-10'>
                    <h2 className='headline-1 lg:max-w-[12ch] text-zinc-400'>
                        This is footer!
                    </h2>
                </div>

                {/* footerNav & socials */}
                <div className='grid grid-cols-2 gap-2 lg:pl-20 py-5'>
                    {/* Sitemap */}
                    <div>
                        <p className='mb-2 text-zinc-400'>Footer Nav</p>
                        <ul>
                            {sitemap.map((object, index)=>(
                                <li key={index}>
                                    <a href={object.href} className='text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                        {object.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Socials */}
                    <div>
                        <p className='mb-2 text-zinc-400'>Socials</p>
                        <ul>
                            {socials.map((object, index)=>(
                                <li key={index}>
                                    <a 
                                    href={object.href} 
                                    className='text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                    target='_blank'>
                                        {object.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer