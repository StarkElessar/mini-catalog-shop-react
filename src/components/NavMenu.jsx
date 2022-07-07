import React from 'react'
import Categories from './Categories'
import SortBy from './SortBy'

function NavMenu({ onClickCategory, onClickSortBy }) {
  
  return (
    <nav className='catalog__nav-menu nav-menu'>
      <Categories onClickCategory={onClickCategory} />
      <SortBy onClickSortBy={onClickSortBy} />
    </nav>
  )
}

export default NavMenu
