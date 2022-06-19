import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-green-500 capitalize hover:bg-green-600 hover:scale-105 w-full md:max-w-xs transition ease-in hover:ease-out mx-auto  py-4 px-3 font-gbold rounded shadow-lg text-white">
        {text}
    </button>
  )
}

export default Button