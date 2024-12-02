import React from 'react';

export default function Buttons({ handleClick, type, className, icon, iconClass }) {
  return (
    <button className={`${className} flex gap-1 items-center`} onClick={handleClick}>
      <img src={icon} alt={type} className={`${iconClass} object-contain`} />
    <span className='font-medium'> {type}</span> 
    </button>
  );
}
