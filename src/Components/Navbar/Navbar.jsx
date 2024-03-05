import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <div className='flex w-full h-24 fixed top-0 z-10 bg-white'>
        <img src="https://worldref.co/wp-content/uploads/2023/09/WorldRef-Logo_Home-Page.svg" alt="Logo" className="logo-img"/>
        <nav>
            <ul className='flex w-[800px] h-24 justify-evenly items-center mx-20'>
                <li>EquipFab</li>
                <li>MROHub</li>
                <li>Talent'd</li>
                <li>Live RFQs</li>
                <li>About us</li>
                <li>Winsights^</li>
                <li>Log in^</li>
            </ul>
           
        </nav>
        <button className='btn justify-items-end w-[150px] h-12 rounded-lg self-center'>Get A Quote</button>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </div>

  )
}

export default Navbar