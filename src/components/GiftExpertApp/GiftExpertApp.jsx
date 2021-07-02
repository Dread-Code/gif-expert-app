import React, { useState } from 'react'
import AddCategory from '../AddCategory'
import GifGrid from '../GifGrid'

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Dororo'])

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr></hr>
      {categories.map((category, key) => (
        <GifGrid category={category} key={category + key} />
      ))}
    </div>
  )
}

export default GiftExpertApp
