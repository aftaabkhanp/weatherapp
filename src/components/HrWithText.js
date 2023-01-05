import React from 'react'
import './HrWithText.css'
function HrWithText(props) {
  return (
    <div className='HrWithText'>
        <hr></hr>
        <p>{props.content}</p>
        
        <hr></hr>
    </div>
  )
}

export default HrWithText