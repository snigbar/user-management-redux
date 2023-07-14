import React, { useEffect, useState } from 'react'
import { useCreateUserMutation, useUpdateUserMutation } from '../API/api'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CreateUser = () => {

    const [user, setUser] = useState({})
    const {id} = useParams()
    const userData = id ? useSelector(state => state.users.users.find(user => user._id === id)): {}
    const _id = userData?._id
    

    useEffect(()=>{
        if(id !== 'create'){ 
            setUser(userData)
        }
    },[userData])
   

    const [CreateUser] = useCreateUserMutation()
    const [updateUser] = useUpdateUserMutation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value
        const phone = e.target.phone.value

        const userDataCreate = { name, email,phone }
       CreateUser(userDataCreate).unwrap().then((response) => {
        // Handle successful response here
        if(response._id){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'user created',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/', {replace:true})
        }

        if(response.errors){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${response.message}`,
                showConfirmButton: false,
                timer: 3000
              })
        }

        if(response.code === 11000){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${response.keyValue?.email} already in use`,
                showConfirmButton: false,
                timer: 3000
              })
        }
        console.log(response)
      }).catch((err) => {
        // Handle error here
        console.error(err);
      });
        e.target.reset() 
       
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value
        const phone = e.target.phone.value
        const userDataUpdate = {name, email, phone }

       updateUser({id:_id, value:userDataUpdate}).unwrap().then((response) => {
        // Handle successful response here
        if(response._id){
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/', {replace:true})
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `Failed to Update - ${response.message}`,
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
        }
       
      }).catch((err) => {
        // Handle error here
        console.error(err);
      });
    
       
    }

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center drop-shadow-xl">
    <div className="flex flex-col w-full">
     <div className="sm:mx-0.5 lg:mx-0.5">
    <h1 className='text-center text-3xl mb-4 font-semibold text-gray-600 uppercase'>{id === "create"?"Create User":"Update User"}</h1>
     
     {/* form */}

     <div className="w-full max-w-xs md:max-w-sm mx-auto">
 {id === "create"? <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name" name="name" required/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@mail.com" name="email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
       Phone Number
      </label>
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="your phone number (numbers only)" name="phone"/>
      
    </div>
   
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Create 
      </button>
  
  </form>
  
  :
  
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleUpdate}>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name" name="name" required  defaultValue={user?.name}/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@mail.com" name="email"  defaultValue={user?.email}/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
     Phone Number
    </label>
    <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="your phone number (numbers only)" name="phone" defaultValue={user?.phone}/>
    
  </div>
 
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Update 
    </button>

</form>

  }
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
   
     </div>
     </div>
   </div>
  )
}

export default CreateUser