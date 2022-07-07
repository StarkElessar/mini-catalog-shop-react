import React from 'react'
import Delivery from './Delivery'

const ProductCard = React.memo(({ ...item }) => {
  const fixedPrice = item.price.toFixed(2)
  const bonusCost = (item.price / 100).toFixed(2)

  return (
    <article className='catalog__item product-card'>
      <div className='product-card__article'>код
        <span className='product-card__article_id'>{item.id}</span>
      </div>

      <div className="product-card__img">
        <img src={item.imgUrl} alt="Product Image" />
        {item.delivery && <Delivery />}
      </div>

      <h4 className='product-card__title'>{item.title}</h4>
      <span className='product-card__price'>{fixedPrice} р.</span>
      <span className='product-card__bonus'>Бонус {bonusCost} р.</span>

      <button className="product-card__btn">В корзину</button>
    </article>
  )
})

export default ProductCard
