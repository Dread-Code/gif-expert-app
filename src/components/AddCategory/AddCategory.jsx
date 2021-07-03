import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './AddCategory.css'

const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue) {
      setCategories([inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form className="add-category-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={'Que quieres buscar?'}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

export default AddCategory
