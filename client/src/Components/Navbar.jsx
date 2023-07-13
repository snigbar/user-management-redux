import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="h-20 bg-transparent flex justify-between items-center w-11/12 mx-auto">
      {/* logo */}
      <div className="text-2xl">logo</div>

      {/* links */}

      <ul className="flex items-center justify-between text-lg gap-8">
        <NavLink to='/' className='px-4 py-2'>Home</NavLink>
        <Link  to='/create'><button className="btn text-white bg-[#217e80] hover:bg-[#186163] hover:-translate-y-1 transition-all duration-500 px-4 py-3 rounded-lg active:translate-y-1">Add User</button></Link>
        
      </ul>

    </nav>
  )
}

export default Navbar