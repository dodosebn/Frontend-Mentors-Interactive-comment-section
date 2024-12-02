import React from 'react'

const Footer = ({name}) => {
  return (
    <footer className='text-darkBlue text-center' >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-moderateBlue'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/dodosebn?tab=repositories" className='text-moderateBlue'>{name}</a>
    </footer>
  )
}

export default Footer;
