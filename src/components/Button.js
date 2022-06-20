import React from 'react'

const Button = ({ text, downloadUrl, downloadTitle }) => {
  console.log(downloadUrl, downloadTitle, text)
  return (
    <a href={downloadUrl} download={downloadTitle} className="block cursor-pointer bg-green-500 text-center capitalize hover:bg-green-600 hover:scale-105 w-full md:max-w-xs transition ease-in hover:ease-out  py-4 px-3 font-gbold rounded shadow-lg text-white">
        {text}
    </a>
  )
}

export default Button