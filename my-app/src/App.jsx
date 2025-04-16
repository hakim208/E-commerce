import React from 'react'

import Navbar from './comanents/navbar/navbar'

import Imgnavbar from "./assets/YOUR LOGO.png"
import ImgChek from "./assets/Group 2609203.png"
import ImgUser from "./assets/Ellipse 67.png"

const App = () => {
  let list = [{ name: "hakim", status: true, id: 1 }, { name: "sherwin", status: false, id: 2 }]
  return (
    <div>
      <Navbar img={Imgnavbar} chek={ImgChek} user={ImgUser} />
      <p>WE’RE STILL</p>
      <p>Filling up <br /> the spaces.</p>
      <div className="boxBtnAndtext">
        <button>Explore Marketplace</button>
        <p>See Top Deals</p>
      </div>
      {/* <p>
        {
          list.map((e) => {
            return (
              <Button status={e.status} text={e.name} id={e.id} />
            )
          })
        }
      </p> */}
    </div>
  )
}

export default App
