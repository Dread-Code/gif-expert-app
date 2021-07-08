import React, { useState } from 'react'
import AddCategory from '../AddCategory'
import GifGrid from '../GifGrid'
import './GiftExpertApp.css'

const GiftExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} categories={defaultCategories} />
      <hr></hr>
      <div className="gif-grid">
        {categories.map((category, key) => (
          <GifGrid category={category} key={category + key} />
        ))}
      </div>
    </div>
  )
}

export default GiftExpertApp
