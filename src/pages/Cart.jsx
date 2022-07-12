import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaAngleLeft, FaShoppingBasket, FaTrashAlt } from "react-icons/fa"

import CartItem from "../components/CartItem";

export default function Cart() {
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart)
  const productArray = [].concat.apply([], Object.values(items))

  return (
    <section className="page__cart cart">
      <div className="cart__container">
        <div className="cart__header">
          <div className="cart__title">
            <FaShoppingBasket className='cart__title_icon'/>
            <h2 className='cart__title_text'>Корзина</h2>
          </div>
          <button className="cart__clear-btn">
            <FaTrashAlt className="cart__clear-btn_icon"/>
            <span className="cart__clear-btn_text">Очистить корзину</span>
          </button>
        </div>

        <div className="cart__body cart-body">
          <div className="cart-body__items">
            {
              productArray.map((objectProduct, index) => {
                return (
                  <CartItem key={`${objectProduct.id}_${index}`} {...objectProduct}/>
                )
              })
            }
          </div>
          <div className="cart-body__footer">
            <div className="cart-body__total-count">
              Всего товаров: <span className="cart-body__total-count_number">{totalCount} шт.</span>
            </div>
            <div className="cart-body__total-price">
              Сумма заказа: <span className="cart-body__total-price_number">{totalPrice} Br</span>
            </div>
          </div>
        </div>

        <div className="cart__footer">
          <Link to='/' className='cart__back-btn'>
            <FaAngleLeft className='cart__back-btn_icon'/>
            <span>Вернуться назад</span>
            </Link>
          <button className='cart__checkout-btn'>Оплатить сейчас</button>
        </div>
      </div>
    </section>
  )
}
