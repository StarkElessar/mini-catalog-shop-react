import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa"

const ButtonCart = React.memo(() => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)

  return (
    <Link to='/cart' className="header__cart cart-btn">
      <span className='cart-btn__cost'>{totalPrice} Br</span>
      <i className='cart-btn__divider'></i>
      <FaShoppingBasket className='cart-btn__icon' />
      <span className='cart-btn__amount'>{totalCount}</span>
    </Link>
  )
})

export default ButtonCart 