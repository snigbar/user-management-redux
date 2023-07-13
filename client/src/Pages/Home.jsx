import React, { useEffect } from 'react'
import TableRow from '../Components/TableRow'
import { useGetUsersQuery } from '../API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../Slice/UserSlice';

const Home = () => {

  const usersState = useSelector((state) => state.users.users)
  const dispatch = useDispatch()

  const {
    data: users= [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUsersQuery();
 

  useEffect(()=>{
    if(users.length > 0 && !isLoading) dispatch(setUsers(users))
  },[users, dispatch])

  console.log(usersState)

  if(isLoading || isFetching){
   return <div className="w-full h-screen flex flex-col justify-center text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
 </div>
  }
  
  if(isError || error){
   return <div className="w-full h-screen flex flex-col justify-center text-center">
    <div role="status">
    <h1 className='text-xl text-red-600'>An error occured: - {error.status}</h1>
    </div>
 </div>
  }
  

  return (

    
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center drop-shadow-xl">

     {/* table */}
     <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
     <h1 className='text-center text-3xl mb-4 font-semibold text-gray-600 uppercase'>All users</h1>
     <p className='text-center text-lg mb-2 text-[#217e80]'>You can manage all users from here</p>
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">

      <table className="w-[95vw] lg:max-w-[75%] mx-auto">
      {/* table head */}
      <thead className="bg-[#217e80]">
        <tr className="text-sm font-medium text-white text-left ">
          <th scope="col" className="px-6 py-4">
          No.
          </th>
          <th scope="col" className="px-6 py-4">
          ID
          </th>
          <th scope="col" className="px-6 py-4">
          Name
          </th>
          <th scope="col" className="px-6 py-4 text-center">
          Details
          </th>
          <th scope="col" className="px-6 py-4 text-center">
          Update
          </th>
          <th scope="col" className="px-6 py-4 text-center">
          Delete
          </th>
        </tr>
      </thead>


      <tbody>
        {/* table body */}
    
   <TableRow></TableRow>
  
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Home