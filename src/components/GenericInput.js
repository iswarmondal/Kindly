import React from 'react'

function GenericInput(props) {
  return (
    <>
        <input 
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            className="bg-gradient-to-r from-light-orange to-light-purple p-4 rounded-md border-2 border-light-black flex items-center justify-center"
            id={props.id}
        />
    </>
  )
}

export default GenericInput