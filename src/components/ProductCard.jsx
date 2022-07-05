import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

export default function ProductCard(props) {
  return (
    <article className='catalog__item product-card'>
      <div className='product-card__article'>код
        <span className='product-card__article_id'>{props.id}</span>
      </div>
      <div className="product-card__img">
        <img src={props.imgUrl} alt="Product Image" />
        <div className='product-card__delivery-type'>
          <FaShippingFast className='product-card__delivery-type_icon' />
          <span className='product-card__delivery-type_text'>Бесплатно по РБ</span>
        </div>
      </div>
      <h4 className='product-card__title'>{props.title}</h4>
      <span className='product-card__price'>{props.price.toFixed(2)} р.</span>
      <span className='product-card__bonus'>Бонус {(props.price / 100).toFixed(2)} р.</span>
      <button className="product-card__btn">В корзину</button>
    </article>
  )
}
