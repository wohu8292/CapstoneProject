import React from 'react'
import school_logo from '../assets/boulder-one-line.avif'
import { MdHome } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='font-arimo'>
          {/* upper Navbar */}
          <div className='p-3'>
            <div className=' container flex justify-between items-center'>
              {/* homepage Logo */}
              <div>
                <a href="#">
                  <img src={school_logo} alt="Logo" height={242}/>
                </a> 
              </div>
    
              {/* searchBar and orderButton */}
              <div>
    
              </div>
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
            <ul className='sm:flex hidden items-center w-[100%] gap-5 m-4 text-[13px]'>
              <li><a href='#'><MdHome size={20}/></a></li>
              <li><a href='#'>Brainstorming</a></li>
              <li><a href='#'>Prototyping</a></li>
              <li><a href='#'>Iteration</a></li>
              <li><a href='#'>Deliverables</a></li>
              <li><a href='#'>Resources</a></li>
            </ul>
          </div>
    
        </div>
      )
}

export default Navbar