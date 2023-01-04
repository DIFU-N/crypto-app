import React from 'react'
import {FaCoins} from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to='/'>
        <div className='flex justify-center items-center'>
            <FaCoins className='text-[2rem] text-[#6900ff]'/>
            <h1 className='font-bold text-4xl'>Coin <span className='font-bold text-4xl text-[#6900ff]'>Search</span></h1>
        </div>
    </Link>
  )
}

export default NavBar