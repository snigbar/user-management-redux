import React from 'react'
import TableRow from '../Components/TableRow'

const Home = () => {
  return (
    
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center drop-shadow-xl">

     {/* table */}
     <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
     <h1 className='text-center text-3xl mb-4 font-semibold text-gray-600 uppercase'>All users</h1>
     <p className='text-center text-lg mb-2 text-[#217e80]'>You can manage all users from here</p>
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">

      <table className="min-w-[80vw]">
      {/* table head */}
      <thead className="bg-[#217e80]">
        <tr className="text-sm font-medium text-white text-left ">
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