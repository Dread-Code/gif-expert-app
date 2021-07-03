export const getGifs = async (category, setImages) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gneBqGuZitZZQshUekBoAr6KF4Bg82Zy&q=${encodeURI(
    category
  )}&limit=12`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    height: img.images.downsized_medium.height,
    width: img.images.downsized_medium.width
  }))
  return gifts
}
