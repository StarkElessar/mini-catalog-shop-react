import React from 'react'
import { Link } from 'react-router-dom'

import cartEmptyImg from '../images/cart-empty.svg' 

function CartEmpty() {
  return (
    <div className="cart__container cart-empty">
      <h2 className="cart-empty__title">Корзина пуста 😕</h2>
      <p className="cart-empty__desc">
        Вероятней всего, вы еще не заказывали товары.
      </p>
      <p className="cart-empty__desc">
        Для того, чтобы заказать товар, перейдите на главную страницу.
      </p>
      <div className="cart-empty__img">
        <img src={cartEmptyImg} alt="Cart Empty"/>
      </div>
      <Link to='/' className='cart-empty__btn'>Вернуться назад</Link>
    </div>
  )
}

export default CartEmpty