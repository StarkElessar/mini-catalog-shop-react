import React, { memo } from 'react'
import Delivery from './Delivery'


const ProductCard = ({ ...objectCard }) => {
  const {id, title, price, imgUrl, brand, delivery, onClickAddToCart} = {...objectCard}
  const fixedPrice = price.toFixed(2)
  const bonusCost = (price / 100).toFixed(2)

  const handleClickToCart = () => onClickAddToCart({id, title, price, imgUrl, brand})

  return (
    <article className='catalog__item product-card'>
      <div className='product-card__article'>код
        <span className='product-card__article_id'>{id}</span>
      </div>

      <div className="product-card__img">
        <img src={imgUrl} alt='Washing Machine'/>
        {delivery && <Delivery />}
      </div>

      <h4 className='product-card__title'>{title}</h4>
      <span className='product-card__price'>{fixedPrice} р.</span>
      <span className='product-card__bonus'>Бонус {bonusCost} р.</span>

      <button
        className="product-card__btn"
        onClick={handleClickToCart}
      >
        В корзину
      </button>
    </article>
  )
}

export default memo(ProductCard)
