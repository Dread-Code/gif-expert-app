import React from 'react'
import './GifGridItem.css'
import PropTypes from 'prop-types'

const GifGridItem = ({ title, url, height, width }) => {
  return (
    <div
      className="card animate__animated animate__fadeIn"
      style={{ backgroundImage: `url("${url}")` }}
      alt={title}
    />
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem
