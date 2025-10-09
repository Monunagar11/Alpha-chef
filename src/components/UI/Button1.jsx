import React from 'react'

function Button1({name}) {
  return (
    <button className='p-4 bg-orange-300 outline-0 rounded relative font-medium after:content-[""] after:absolute after:w-100 after:bg-green-700 after:h-0 hover:after:h-100 '>
        {name}
    </button>
  )
}

export default Button1
