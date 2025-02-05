import React from 'react'
import school_logo from '../assets/boulder-one-line.avif'
import {MdHome} from "react-icons/md";

const navList = [
    {
        id: 1,
        label: <MdHome size={20}/>,
        href: '#Brainstorming'
    }, {
        id: 2,
        label: 'Brainstorming',
        href: '#Brainstorming'
    }, {
        id: 3,
        label: 'Prototyping',
        href: '#Prototyping'
    }, {
        id: 4,
        label: 'Iteration',
        href: '#Iteration'
    }, {
        id: 5,
        label: 'Reviews',
        href: '#Reviews'
    }, {
        id: 6,
        label: 'Deliverables',
        href: '#Deliverables'
    }, {
        id: 7,
        label: 'Resources',
        href: '#Resources'
    }
];

const Navbar = () => {
    return (
        <div className='font-arimo'>
            {/* upper Navbar */}
            <div className='p-3'>
                <div className=' container flex justify-between items-center'>
                    {/* homepage Logo */}
                    <div>
                        <a href="#">
                            <img src={school_logo} alt="Logo" width={242} height={36} className='py-1'/>
                        </a>
                    </div>

                    {/* searchBar and orderButton */}
                    <div></div>
                </div>
            </div>

            {/* mid Navbar */}
            <div className='bg-primaryDarkgray text-white p-4'>
                <div className='container'>
                    <div className='text-xl mb-2'>Sustainability in Projects</div>
                    <div className='text-xs'>College of Engineering and Applied Sciences</div>
                </div>
            </div>

            {/* lower Navbar */}
            <div className='container'>
                <ul className='sm:flex hidden items-center w-[100%] text-[13px]'>
                    {
                        navList.map((object, index) => (
                            <a href="#" key={index} className='hover:bg-primaryGold p-3 text-base font-semibold transition duration-300'>
                                <li>{object.label}</li>
                            </a>
                        ))
                    }
                    {/* <li className='hover:bg-primaryGold'><a href='#'><MdHome size={20}/></a></li>
              <li><a href='#'>Brainstorming</a></li>
              <li><a href='#'>Prototyping</a></li>
              <li><a href='#'>Iteration</a></li>
              <li><a href='#'>Deliverables</a></li>
              <li><a href='#'>Resources</a></li> */
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar