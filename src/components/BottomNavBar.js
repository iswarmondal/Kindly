import React from 'react'

function BottomNavBar(props) {
  return (
    <nav className='bg-grey-100 p-4 mt-3 flex items-center justify-around fixed bottom-0 w-full h-20 shadow-soft'>
        <h3>Home</h3>
        <img src={props.src} alt={props.alt} className='w-16 -translate-y-12' />
        <h3>Library</h3>
    </nav>
  )
}

export default BottomNavBar