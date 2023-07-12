import React from 'react'

const TableRow = () => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-slate-50 border-b-slate-200">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      Mark
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <button type="button" className="text-white bg-[#217e80] hover:bg-[#186163] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto">View Details</button>
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <button type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto">Update</button>
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
    <button type="button" className="text-white bg-[#EB5351] hover:bg-[#ce3e3b] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-auto">Delete</button>
    </td>
</tr>
  )
}

export default TableRow