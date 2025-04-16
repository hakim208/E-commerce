import React from 'react'
import "./App.css"

import Navbar from './comanents/navbar/navbar'
import Button from './comanents/button/button'
import Cart from './comanents/cart/cart'

import Imgnavbar from "./assets/YOUR LOGO.png"
import ImgChek from "./assets/Group 2609203.png"
import ImgUser from "./assets/Ellipse 67.png"
import ImgSec1 from "./assets/Rectangle 10342.png"
import ImgSec2 from "./assets/Frame 83.png"
import ImgSale from "./assets/Group 2609204.png"
import ImgCart from "./assets/Image (53).png"

const App = () => {
  let list = [{ imgSale: ImgSale, img: ImgCart, text: "Nokia Essential Wireless Headphones 120CM BLACK", add: "Add to Cart", btn: "Buy Now", id: 1 }, { imgSale: ImgSale, img: ImgCart, text: "Nokia Essential Wireless Headphones 120CM BLACK", add: "Add to Cart", btn: "Buy Now", id: 2 }, { imgSale: ImgSale, img: ImgCart, text: "Nokia Essential Wireless Headphones 120CM BLACK", add: "Add to Cart", btn: "Buy Now", id: 3 }]
  return (
    <div>
      <Navbar img={Imgnavbar} chek={ImgChek} user={ImgUser} />
      <div className="section1">
        <div className="box1">
          <p style={{ fontFamily: "serif" }}>WE’RE STILL</p>
          <p className='textFilling'>Filling up <br /> the spaces.</p>
          <div className="boxBtnAndtext">
            <Button text="Explore Marketplace" />
            <p>See Top Deals</p>
          </div>
        </div>
        <img src={ImgSec1} className='ImgSec1' alt="" />
      </div>
      <div data-aos="fade-up" className="section2">
        <p>Our Top Deals</p>
        <img src={ImgSec2} alt="" />
      </div>
      <div className="cartUser">
        {
          list.map((e) => {
            return (
              <Cart img={e.imgSale} imgcart={ImgCart} text={e.text} add={e.add} btn={e.btn} />
            )
          })
        }
      </div>
      <div className="section2">
        <p>Best Selling Product</p>
        <img src={ImgSec2} alt="" />
      </div>
      <div className="cartUser">
        {
          list.map((e) => {
            return (
              <Cart img={e.imgSale} imgcart={ImgCart} text={e.text} add={e.add} btn={e.btn} />
            )
          })
        }
      </div>
      <div className="section3">
        <p className='textSub'>Subscribe to Our Newsletter</p>
        <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
        <div className="search">
          <input type="text" className='searchinp' placeholder='Enter your Email Here '  />
          <button className='btnsearch'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default App
