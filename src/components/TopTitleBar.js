import React from 'react'
import ReturnBtn from "../components/ReturnBtn";

function TopTitleBar(props) {
  return (
    <>
        <div className="flex justify-start my-2 ml-2 items-center font-bold">
            <ReturnBtn />
            <h4 className='translate-x-3/4'>{props.children}</h4>
        </div>
    </>
  )
}

export default TopTitleBar