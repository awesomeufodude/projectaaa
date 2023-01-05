import React from 'react'

function CopyRight() {
  return (
   <div className='text-center bg-project_black text-gray-500 p-2 box-border rounded-md'>
          <h1>Copyright © {new Date().getFullYear()}</h1>
       </div>
  )
}

export default CopyRight