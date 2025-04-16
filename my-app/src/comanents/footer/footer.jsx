import React from 'react'
import "./footer.css"

const Footer = ({img}) => {
  return (
    <div className='footer'>
      <div className="div1">
        <p style={{fontWeight:"800",fontSize:"20px"}}>Your Company</p>
        <p className='textOur'>Our mission is to make gadjet <br /> purchase, accessible and affordable.</p>
      </div>
      <div className="div1">
        <p style={{fontWeight:"800",fontSize:"20px"}}>Helpful Links</p>
        <p className='textOur'>Home</p>
        <p className='textOur'>About Us</p>
        <p className='textOur'>Marketplace</p>
        <p className='textOur'>Blog</p>
        <p className='textOur'>Contact Us</p>
      </div>
      <div className="div1">
        <p style={{fontWeight:"800",fontSize:"20px"}}>Site Map</p>
        <p className='textOur'>Our Mobile App</p>
        <p className='textOur'>Frequently Asked Questions</p>
        <p className='textOur'>Help Desk</p>
        <p className='textOur'>Privacy Policy</p>
        <p className='textOur'>Terms and Conditions</p>
      </div>
      <div className="div1">
        <p style={{fontWeight:"800",fontSize:"20px"}}>Contact Us</p>
        <img src={img} alt="" />
        <p className='textOur'>hello@yourcompany.com</p>
      </div>
    </div>
  )
}

export default Footer
