import React from 'react'
import GifGridItem from '../GifGridItem'
import useGetGifs from './hook/useGetGifs'
import './GifGrid.css'

function GifGrid({ category }) {
  const { images, loading } = useGetGifs(category)

  if (!loading) return <h1>Cargando...</h1>
  return (
    <>
      {images.map(img => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </>
  )
}

export default GifGrid
