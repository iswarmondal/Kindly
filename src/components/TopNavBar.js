import React from 'react'
import { IoIosGitCommit } from "react-icons/io";

function topNavBar() {
  return (
    <>
        <nav className='bg-gradient-to-r from-light-orange to-light-purple h-16 flex justify-around items-center'>
            <h3>Kindly</h3>
            <h3>
              <IoIosGitCommit />
            </h3>
            <h3>Search</h3>
        </nav>
    </>
  )
}

export default topNavBar