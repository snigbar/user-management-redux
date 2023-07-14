import React from 'react'
import { FaPhone } from 'react-icons/fa';
import { FiMail,FiArrowLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams()
    const user = useSelector(state => state.users.users.find(user => user._id === id))
    const {name, email, phone} = user
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center drop-shadow-xl">
    <div className="flex flex-col w-full">
     <div className="sm:mx-0.5 lg:mx-0.5">
    <h1 className='text-center text-3xl mb-4 font-semibold text-gray-600 uppercase'>Details</h1>
    <p className='text-center text-lg mb-2 text-[#217e80]'>User Details</p>
     <div className="bg-gray-100 py-6 rounded-xl w-4/5 md:w-1/2 lg:w-2/5 sm:px-6 lg:px-8 flex gap-8 justify-around mx-auto mt-6 relative">
     <Link to='/' className='absolute top-2 right-4 p-2 bg-gray-100 hover:bg-slate-200'><FiArrowLeft /></Link>
       <h3 className='text-xl font-normal'>Name: {name}</h3>
       <div className='flex flex-col gap-3'>
        <p><FaPhone className='inline-block mb-1 me-2'/>Phone: {phone}</p>
        <p><FiMail className='inline-block mb-1 me-2'/>Email: {email}</p>
       </div>
     </div>
   
     </div>
     </div>
   </div>
  )
}

export default UserDetails