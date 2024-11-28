import React from 'react'

const Buttons = ({handleClick, type, className, icon}) => {
  return (
    <div className={className} onClick={handleClick}>
        <img src={icon} alt={type} className='object-cover'/>
      {type}
    </div>
  )
}

export default Buttons;
