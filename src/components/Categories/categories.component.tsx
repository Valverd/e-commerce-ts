import { useEffect, useState } from 'react'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

import categoriesDB from '../../database/categoriesDB.database'
import CategoryType from '../../types/Category'
import Categoryitem from '../Category-Item/category-item.component'

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    async function updateCategories() {
      await setCategories(categoriesDB)
    }

    updateCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <Categoryitem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
