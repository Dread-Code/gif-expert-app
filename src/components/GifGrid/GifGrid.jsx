import React from 'react'

function GifGrid({ category }) {
  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=gneBqGuZitZZQshUekBoAr6KF4Bg82Zy&q=Rick and Morty&limit=10'
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifts)
  }
  getGifs()
  return (
    <div>
      <h1>{category}</h1>
    </div>
  )
}

export default GifGrid
