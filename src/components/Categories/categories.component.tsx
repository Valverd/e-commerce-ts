import { useEffect, useState } from 'react'
import './categories.styles.css'

import categoriesDB from '../../database/categoriesDB.database'
import Category from '../../types/Category'
import Categoryitem from '../Category-Item/category-item.component'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function updateCategories() {
      await setCategories(categoriesDB)
    }

    updateCategories()
  }, [])

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categories.map((category) => (
          <div key={category.id}>
            <Categoryitem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
