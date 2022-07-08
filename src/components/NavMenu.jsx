import React from 'react'

import Categories from './Categories'
import SortBy from './SortBy'

const NavMenu = React.memo(({ activeCategory, onClickCategory, activeSortBy, onClickSortBy }) => {
  return (
    <nav className='catalog__nav-menu nav-menu'>
      <Categories activeCategory={activeCategory} onClickCategory={onClickCategory} />
      <SortBy activeSortBy={activeSortBy} onClickSortBy={onClickSortBy} />
    </nav>
  )
})

export default NavMenu
