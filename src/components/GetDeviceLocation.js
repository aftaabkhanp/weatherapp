import React from 'react'
import './GetDeviceLocation.css'
function GetDeviceLocation(props) {
  return (
    <div className='GetDeviceLocation'>
        <button onClick={props.onClick}>GetDeviceLocation</button>
    </div>
  )
}

export default GetDeviceLocation