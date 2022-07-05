import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

export default function ProductCard() {
  return (
    <article className='catalog__item product-card'>
      <div className='product-card__article'>код
        <span className='product-card__article_id'>744.408</span>
      </div>
      <div className="product-card__img">
        <img src="https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/products/653011/f2v3gs6w.jpg.webp" alt="Product Image" />
        <div className='product-card__delivery-type'>
          <FaShippingFast className='product-card__delivery-type_icon' />
          <span className='product-card__delivery-type_text'>Бесплатно по РБ</span>
        </div>
      </div>
      <h4 className='product-card__title'>Стиральная машина BEKO WRE65P2BAA</h4>
      <span className='product-card__price'>1045,00 р.</span>
      <span className='product-card__bonus'>Бонус 10,45 р.</span>
      <button className="product-card__btn">В корзину</button>
    </article>
  )
}
