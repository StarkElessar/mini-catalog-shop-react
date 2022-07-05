import React from 'react'

export default function ProductCard() {
  return (
    <article className='catalog__item product-card'>
      <span className='product-card__id'>код 744.408</span>
      <img
        src="https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/products/653011/f2v3gs6w.jpg.webp"
        alt="Product Image"
      />
      <span className='product-card__delivery-type'>Бесплатно по РБ</span>
      <h4 className='product-card__title'>Стиральная машина BEKO WRE65P2BAA</h4>
      <span className='product-card__price'>1045,00 р.</span>
      <span className='product-card__bonus'>Бонус 10,45 р.</span>
      <button className="product-card__btn">В корзину</button>
    </article>
  )
}
