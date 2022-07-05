import React from 'react'
import { FaShoppingBasket } from "react-icons/fa"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <div className="header__logo">
            <span>MiniCatalogShop</span>
          </div>
          <div className="header__cart cart">
            <FaShoppingBasket className='cart__icon' />
            <span className='cart__amount'>0</span>
          </div>
        </div>
      </div>
    </header>
  )
}
