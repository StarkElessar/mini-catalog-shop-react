import React from 'react'
import ProductItems from './ProductItems'

export default function SectionCatalog({productData, onAdd}) {
  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <h2 className='catalog__title'>Каталог товаров</h2>

        <ProductItems items={productData} onAdd={onAdd}/>
      </div>
    </section>
  )
}
