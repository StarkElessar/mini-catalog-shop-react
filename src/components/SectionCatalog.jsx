import React from 'react'
import ProductItems from './ProductItems'

export default function SectionCatalog() {
  
  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <ProductItems />
      </div>
    </section>
  )
}
