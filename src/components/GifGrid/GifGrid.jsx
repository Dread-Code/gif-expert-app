import React from 'react'
import GifGridItem from '../GifGridItem'
import useGetGifs from './hook/useGetGifs'
import PropTypes from 'prop-types'
import './GifGrid.css'

function GifGrid({ category }) {
  const { images, loading } = useGetGifs(category)

  if (!loading) return <h1 className="animate__animated animate__flash">Cargando...</h1>
  return (
    <>
      {images.map(img => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
