import React, { memo } from 'react'

import Categories from './Categories'
import SortBy from './SortBy'

const NavMenu = ({ activeCategory, onClickCategory, activeSortBy, onClickSortBy }) => (
  <nav className='catalog__nav-menu nav-menu'>
    <Categories activeCategory={activeCategory} onClickCategory={onClickCategory} />
    <SortBy activeSortBy={activeSortBy} onClickSortBy={onClickSortBy} />
  </nav>
)

export default memo(NavMenu)
