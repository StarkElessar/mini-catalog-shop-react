import React from 'react'
import { Link } from 'react-router-dom'

import CartEmptyImg from '../images/cart-empty.svg' 

function CartEmpty() {
  return (
    <div className="cart__container cart-empty">
      <h2 className="cart-empty__title">Корзина пустая 😕</h2>
      <p className="cart-empty__desc">
        Вероятней всего, вы не заказывали ещё пиццу.
      </p>
      <p className="cart-empty__desc">
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <div className="cart-empty__img">
        <img src={CartEmptyImg} alt="Cart Empty"/>
      </div>
      <Link to='/' className='cart-empty__btn'>Вернуться назад</Link>
    </div>
  )
}

export default CartEmpty