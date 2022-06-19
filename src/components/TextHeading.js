import React from 'react'

const TextHeading = ({text}) => {
  return (
    <div className="heading">
        <h1 className="max-w-6xl font-gmedium text-3xl leading-12 mb-2 text-center">
          {text}
        </h1>
        <div className="w-16 h-[6px] bg-green-500 mx-auto rounded"></div>
      </div>
  )
}

export default TextHeading