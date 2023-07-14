import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteUserMutation } from '../API/api'
import Swal from 'sweetalert2'

const TableRow = ({data,idx}) => {
  const {_id, name} = data
  const [DeleteUser] = useDeleteUserMutation()

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        DeleteUser(id).unwrap().then((response) => {
          // Handle successful response here
         if(response._id){ 
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
          })
         }
        else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'failed to delete',
            showConfirmButton: false,
            timer: 1500
          })
        }
        }).catch(err => console.log(err))

      }
    })


  }
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-slate-50 border-b-slate-200">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{_id.slice(-6)}</td>
    <td className="text-lg text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
     {name}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <Link to={`user/${_id}`}><button type="button" className="text-white bg-[#217e80] hover:bg-[#186163] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto">View Details</button></Link>
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <Link to={`update/${_id}`}><button type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto">Update</button></Link>
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <button type="button" className="text-white bg-[#EB5351] hover:bg-[#ce3e3b] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto" onClick={() => handleDelete(_id)}>Delete</button>
    </td>
</tr>
  )
}

export default TableRow