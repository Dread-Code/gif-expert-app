import React, { useEffect, useState } from 'react'
import GifGridItem from '../GifGridItem'
import './GifGrid.css'

function GifGrid({ category }) {
  const [images, setImages] = useState([])

  useEffect(() => {
    if (category) getGifs()
  }, [category])

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=gneBqGuZitZZQshUekBoAr6KF4Bg82Zy&q=Rick and Morty&limit=10'
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
      height: img.images.downsized_medium.height,
      width: img.images.downsized_medium.width
    }))
    setImages(gifts)
  }
  return (
    <div className="gif-grid">
      {images.map(img => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </div>
  )
}

export default GifGrid
