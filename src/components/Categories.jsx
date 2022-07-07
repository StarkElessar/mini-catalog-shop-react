import React from 'react'

const categoryTags = [
  {
    brand: 'all',
    name: 'все',
  },
  {
    brand: 'beko',
    name: 'beko',
  },
  {
    brand: 'schaub',
    name: 'schaub',
  },
  {
    brand: 'lg',
    name: 'lg',
  },
]

const Categories = React.memo(({ onClickCategory }) => {
  const [activeTag, setActiveTag] = React.useState('все')

  const onSelectTag = (brand, name) => {
    setActiveTag(name)
    onClickCategory(brand)
  }

  return (
    <ul className='nav-menu__list'>
      {
        categoryTags.map(({ brand, name }) => {
          const setItemClassNames = activeTag === name ? 'nav-menu__item active' : 'nav-menu__item'

          return (
            <li
              key={brand}
              onClick={() => onSelectTag(brand, name)}
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