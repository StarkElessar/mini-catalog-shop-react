import React from 'react'
import NavMenu from './NavMenu'
import ProductItems from './ProductItems'

export default function SectionCatalog() {

  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <NavMenu
          onClickTag={(tagName) => console.log(tagName)}
          tags={['все', 'beko', 'schaub', 'lg']}
          sortByTags={['популярности', 'цене', 'алфавиту']}
        />
        <ProductItems />
      </div>
    </section>
  )
}
