import React, { useState } from 'react'
import school_logo from '../assets/boulder-one-line.avif'
import {MdHome} from "react-icons/md";
import { Link } from "react-router-dom";

const navList = [
    {
        id: 1,
        goTo: "/CapstoneProject",
        label: <MdHome size={20}/>,
        href: '#Brainstorming'
    }, {
        id: 2,
        goTo: "/brainstorming",
        label: 'Brainstorming',
        href: '#Brainstorming'
    }, {
        id: 3,
        goTo: "/prototyping",
        label: 'Prototyping',
        href: '#Prototyping'
    }, {
        id: 4,
        goTo: "/iteration",
        label: 'Iteration',
        href: '#Iteration'
    }, {
        id: 5,
        goTo: "/deliverables",
        label: 'Deliverables',
        href: '#Deliverables'
    }, {
        id: 6,
        goTo: "/resources",
        label: 'Resources',
        href: '#Resources'
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    {/* hamburger button */}
                    <button 
                        className='sm:hidden block text-xl' 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
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
                <ul className={`sm:flex ${isOpen ? "block text-center" : "hidden"} items-center w-[100%] text-[13px]`}>
                    {
                        navList.map((object, index) => (
                            <Link to={object.goTo} key={index} className='hover:bg-primaryGold p-3 text-base font-semibold transition duration-300 block sm:inline'>
                                <li className="sm:text-center">{object.label}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
