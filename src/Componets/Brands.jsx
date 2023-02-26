import React from 'react'
import '../CSS_files/brand.css'
import brand_logo from '../Images/brands-tag.png'
const Brands = () => {
  return (
    <div className='brand'>
      <h1>rewards from brands you love.</h1>
      <img src={brand_logo} alt="" />
      </div>
  )
}

export default Brands