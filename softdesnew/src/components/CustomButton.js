import React from 'react'

const CustomButton = (props) => {
  return (
        <button onClick={props.onClick} className="mt-5 rounded-lg overflow-hidden w-60 h-10 text-white bg-[#6F4E37]"> 
            {props.name}
        </button>
  )
}

export default CustomButton