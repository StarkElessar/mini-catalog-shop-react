import React, { memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaAngleLeft, FaShoppingBasket, FaTrashAlt } from "react-icons/fa"
import {
  clearCart,
  removeCartItem,
  decreaseCountItems,
  increaseCountItems
} from '../redux/actions/cart'

import CartEmpty from "../components/CartEmpty";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart)
  const productArray = (Object.values(items).map(({ items }) => items[0])).flat()
  const currentTotalCount = (Object.values(items).map(({ items }) => items.length))
  const currentTotalPrice = (Object.values(items).map(({ totalPrice }) => totalPrice))

  const dispatchClearCart = useCallback(() => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart())
    }
  }, [dispatch])

  const dispatchRemoveCartItem = useCallback((id) => {
    if (window.confirm('Вы действительно хотите удалить данный товар из корзины?')) {
      dispatch(removeCartItem(id))
    }
  }, [dispatch])

  const dispatchDecCountItems = useCallback((id) => {
    dispatch(decreaseCountItems(id))
  }, [dispatch])

  const dispatchIncCountItems = useCallback((id) => {
    dispatch(increaseCountItems(id))
  }, [dispatch])

  return (
    <section className="page__cart cart">
      {
        totalCount === 0
          ? <CartEmpty />
          : (<div className="cart__container">
              <div className="cart__header">
                <div className="cart__title">
                  <FaShoppingBasket className='cart__title_icon' />
                  <h2 className='cart__title_text'>Корзина</h2>
                </div>
                <button className="cart__clear-btn" onClick={dispatchClearCart}>
                  <FaTrashAlt className="cart__clear-btn_icon" />
                  <span className="cart__clear-btn_text">Очистить корзину</span>
                </button>
              </div>

              <div className="cart__body cart-body">
                <div className="cart-body__items">
                  {
                    productArray.map((objectProduct, index) => (
                      <CartItem
                        key={`${objectProduct.id}_${index}`}
                        objectProduct={objectProduct}
                        currentTotalCount={currentTotalCount[index]}
                        currentTotalPrice={currentTotalPrice[index]}
                        removeCurrentItem={dispatchRemoveCartItem}
                        incCartItem={dispatchIncCountItems}
                        decCartItem={dispatchDecCountItems}
                      />
                    ))
                  }
                </div>
                <div className="cart-body__footer">
                  <div className="cart-body__total-count">
                    Всего товаров:
                    <span className="cart-body__total-count_number">
                      {totalCount} шт.
                    </span>
                  </div>
                  <div className="cart-body__total-price">
                    Сумма заказа:
                    <span className="cart-body__total-price_number">
                      {totalPrice} Br
                    </span>
                  </div>
                </div>
              </div>

              <div className="cart__footer">
                <Link to='/' className='cart__back-btn'>
                  <FaAngleLeft className='cart__back-btn_icon' />
                  <span>Вернуться назад</span>
                </Link>
                <button className='cart__checkout-btn'>Оплатить сейчас</button>
              </div>
            </div>)
      }
    </section>
  )
}

export default memo(Cart)