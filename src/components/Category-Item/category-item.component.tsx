import { FunctionComponent } from 'react'
import Category from '../../types/Category'
import { CategoryItemContainer, CategoryName } from './category-item.styles'

interface CategoryItemProps {
  category: Category
}

const Categoryitem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default Categoryitem
