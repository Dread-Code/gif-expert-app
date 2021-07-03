import React from 'react'
import './GifGridItem.css'

const GifGridItem = ({ title, url, height, width }) => {
  return (
    <div className="card animate__animated animate__fadeIn" style={{ backgroundImage: `url("${url}")` }} />
  )
}

export default GifGridItem
