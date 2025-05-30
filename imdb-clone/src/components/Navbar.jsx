import React from 'react'
import Logo from '../movielogo.jpg'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img  className='w-[50px]' src={Logo}/>

        <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>

        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>WatchList</Link>
    </div>
    )
}
export default Navbar