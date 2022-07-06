import React from 'react'
import NavMenu from './NavMenu'
import ProductItems from './ProductItems'

export default function SectionCatalog() {
  
  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <NavMenu />
        <ProductItems />
      </div>
    </section>
  )
}
