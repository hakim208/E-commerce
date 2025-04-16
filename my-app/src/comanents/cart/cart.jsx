import React from 'react'
import "./cart.css"
import Button from '../button/button'

const Cart = ({ img, imgcart, text, add, btn }) => {
    return (
        <div className='Cart'>
            <img src={img} alt="" />
            <img src={imgcart} alt="" />
            <div className="btnBox">
                <button className='btn1'>Audio Devices</button>
                <p style={{ fontFamily: "cursive", fontWeight: "800" }}>₦600,000</p>
            </div>
            <p style={{ fontSize: "23px" }}>{text}</p>
           <div className="boxBtn">
           <p style={{fontFamily:"cursive"}}>{add}</p>
           <Button text={btn} />
           </div>
        </div>
    )
}

export default Cart
