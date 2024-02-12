import React from 'react'
import "./Output.css"

const Output = ({output}) => {
  return (
    <div>
        <div className="outputText">{output}</div>
    </div>
  )
}

export default Output