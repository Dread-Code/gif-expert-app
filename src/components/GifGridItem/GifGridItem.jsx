import React from 'react'

const GifGridItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  )
}

export default GifGridItem
