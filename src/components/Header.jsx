import React from 'react'
import { FaShoppingBasket } from "react-icons/fa"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <div className="header__logo">
            <span className='header__logo_title'>Mini-Catalog Shop</span>
            <span className='header__logo_desc'>самая доступная техника</span>
          </div>
          <div className="header__cart cart">
            <span className='cart__cost'>520 Br</span>
            <i className='cart__divider'></i>
            <FaShoppingBasket className='cart__icon' />
            <span className='cart__amount'>0</span>
          </div>
        </div>
      </div>
    </header>
  )
}
