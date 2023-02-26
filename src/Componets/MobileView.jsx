import React from 'react'
import '../CSS_files/mobileView.css'
import mobile1 from '../Images/mobile1.png'
import mobile2 from '../Images/mobile2.png'
import mobile3 from '../Images/mobile3.png'
const MobileView = () => {
  return (
    <div className='mobileview flex'>
      <div className="left-img1">
        <img src={mobile1} alt="" />
      </div>
      <div className="left-img2">
        <img src={mobile3} alt="" />
      </div>
      <div className="center-img">
        <img src={mobile2} alt="" />
      </div>
      <div className="right-img2">
        <img src={mobile1} alt="" />
      </div>
      <div className="right-img3">
        <img src={mobile3} alt="" />
      </div>

    </div>
  )
}

export default MobileView