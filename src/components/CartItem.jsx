import React from 'react'
import {
  FaRegTimesCircle,
  FaRegPlusSquare,
  FaRegMinusSquare
} from "react-icons/fa"

const CartItem = React.memo(({ id, title, brand, imgUrl,
  currentTotalCount, currentTotalPrice, removeCurrentItem, incCartItem, decCartItem }) => {
  const handleDecItem = () => decCartItem(id)
  const handleIncItem = () => incCartItem(id)
  const handleRemoveItem = () => removeCurrentItem(id)

  return (
    <article className="cart-body__item cart-item">
      <div className="cart-item__img">
        <img src={imgUrl} alt='Washing Machine'/>
      </div>
      <div className="cart-item__text">
        <span className="cart-item__text_id">код товара {id}</span>
        <h4 className="cart-item__text_title">{title}</h4>
        <span className="cart-item__text_brand">"{brand}"</span>
      </div>
      <div className="cart-item__counter block-counter">
        <div className="block-counter__btn" onClick={handleDecItem}>
          <FaRegMinusSquare />
        </div>
        <div className="block-counter__number">{currentTotalCount}</div>
        <div className="block-counter__btn" onClick={handleIncItem}>
          <FaRegPlusSquare />
        </div>
      </div>
      <div className="cart-item__price">
        <span>{currentTotalPrice} Br</span>
      </div>
      <div className="cart-item__delete" onClick={handleRemoveItem}>
        <FaRegTimesCircle />
      </div>
    </article>
  )
})

export default CartItem