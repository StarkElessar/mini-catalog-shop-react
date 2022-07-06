import React from 'react'
import { FaSortUp } from 'react-icons/fa'

export default function NavMenu() {
  return (
    <nav className='catalog__nav-menu nav-menu'>
      <ul className='nav-menu__list'>
        <li className='nav-menu__item nav-menu__item_active'>Все</li>
        <li className='nav-menu__item'>Beko</li>
        <li className='nav-menu__item'>Schaub</li>
        <li className='nav-menu__item'>LG</li>
      </ul>
      <div className="nav-menu__sort-by sort-by">
        <FaSortUp className='sort-by__icon'/>
        <span className='sort-by__text'>Сортировка по:</span>
        <span className='sort-by__tag'>популярности</span>
        <div className="sort-by__popup">
          <ul className="sort-by__popup_list">
            <li className="sort-by__popup_item">популярности</li>
            <li className="sort-by__popup_item">по цене</li>
            <li className="sort-by__popup_item">по алфавиту</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
