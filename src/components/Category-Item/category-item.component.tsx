import { FunctionComponent } from 'react'
import Category from '../../types/Category'
import './category-item.styles.css'
import { url } from 'inspector'

interface CategoryItemProps {
  category: Category
}

const Categoryitem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: `url('${category.imageUrl}')` }}
    >
      <div className='category-name'>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default Categoryitem
