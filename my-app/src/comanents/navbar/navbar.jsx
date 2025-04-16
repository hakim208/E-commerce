import React from 'react'
import "./navbar.css"

const Navbar = ({img,chek,user}) => {
  return (
    <div className='navBar'>
      <img src={img} alt="" />
      <div className="payges">
        <p>Market Place</p>
        <p>Blog</p>
        <p>Pricing</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="boxImg">
        <img src={chek} alt="" />
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default Navbar
