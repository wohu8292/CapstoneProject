import React from 'react'
import school_logo from '../assets/boulder-one-line.avif'

const Navbar = () => {
    return (
        <div>
          {/* upper Navbar */}
          <div className='p-3'>
            <div className='container flex justify-between items-center'>
              {/* homepage Logo */}
              <div>
                <a href="#">
                  <img src={school_logo} alt="Logo"/>
                </a>
              </div>
    
              {/* searchBar and orderButton */}
              <div>
    
              </div>
            </div>
          </div>
    
          {/* middle Navbar */}
          <div className='bg-black text-white p-3'>
            <div>Sustainability in Projects</div>
            <div>College of Engineering and Applied Sciences</div>
          </div>
    
          {/* lower Navbar */}
          <div>
            <ul className='sm:flex hidden items-center gap-4 w-[100%] justify-evenly'>
              <li>nav1</li>
              <li>nav2</li>
              <li>nav3</li>
              <li>nav4</li>
              <li>nav5</li>
            </ul>
          </div>
    
        </div>
      )
}

export default Navbar