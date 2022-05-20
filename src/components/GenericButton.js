import React from 'react'

function GenericButton(props) {
  return (
    <button className='bg-gradient-to-r from-light-orange to-light-purple p-4 rounded-md border-2 border-light-black flex items-center justify-center'>
        {props.children}
    </button>
  )
}

export default GenericButton