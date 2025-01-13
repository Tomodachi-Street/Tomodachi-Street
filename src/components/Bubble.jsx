import React from 'react'

// Helper jsx function for displaying different technologies in bubbles
const Bubble = (props) => {
  return (
    <div className="mr-1.5 mt-2 inline-block bg-gray-200 bg-opacity-75 border-2 border-white text-black px-2 py-1 rounded-full text-xs font-medium shadow-xl">
      {props.text}
    </div>
  )
}

export default Bubble