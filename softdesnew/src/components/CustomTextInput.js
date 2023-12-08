import React from 'react'

const CustomTextInput = (props) => {
  return (
    <div>
        <input 
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className='h-10 border border-[#6F4E37] rounded-lg overflow-hidden my-2.5 px-2.5 w-60 text-[#6F4E37]'
        />
    </div>
  )
}

export default CustomTextInput