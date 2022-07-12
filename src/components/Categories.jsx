import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/actions/filters'

const Categories = React.memo(({ activeCategory, onClickCategory }) => {
  const dispatch = useDispatch()
  const { allCategories } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  
  return (
    <ul className='nav-menu__list'>
      {
        allCategories.map(({ brand, name }) => {
          const setItemClassNames = activeCategory.brand === brand ? 'nav-menu__item active' : 'nav-menu__item'
          const handleClickCategory = () => onClickCategory(brand, name)

          return (
            <li
              key={brand}
              onClick={handleClickCategory}
              className={setItemClassNames}
            >
              {name}
            </li>
          )
        })
      }
    </ul>
  )
})

export default Categories