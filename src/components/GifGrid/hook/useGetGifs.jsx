import { useState, useEffect } from 'react'
import { getGifs } from '../../../helpers/getGifts'

const useGetGifs = category => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (category)
      getGifs(category).then(imgs => {
        setImages(imgs)
        setLoading(true)
      })
  }, [category])
  return {
    images,
    loading
  }
}

export default useGetGifs
