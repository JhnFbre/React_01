import {useState} from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 mb-3 rounded p-3 text-center'> 
        <span className='text-white text-center font-bold'>
            {mensaje}
        </span>
    </div>
  )
}

export default Error