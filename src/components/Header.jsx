import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa"

const Header = React.memo(() => (
  <header className="header">
    <div className="header__container">
      <div className="header__box">
        <Link to='/' className="header__logo">
          <span className='header__logo_title'>Mini-Catalog Shop</span>
          <span className='header__logo_desc'>самая доступная техника</span>
        </Link>

        <Link to='/cart' className="header__cart cart-btn">
          <span className='cart-btn__cost'>520 Br</span>
          <i className='cart-btn__divider'></i>
          <FaShoppingBasket className='cart-btn__icon' />
          <span className='cart-btn__amount'>0</span>
        </Link>
      </div>
    </div>
  </header>
))

export default Header