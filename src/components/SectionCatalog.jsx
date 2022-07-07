import React from 'react'
import NavMenu from './NavMenu'
import ProductItems from './ProductItems'

const categoryTags = ['все', 'beko', 'schaub', 'lg']
const sortTags = ['популярности', 'цене', 'алфавиту']

export default function SectionCatalog() {
  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <NavMenu
          onClickTag={(tagName) => console.log(tagName)}
          tags={categoryTags}
          sortByTags={sortTags}
        />
        <ProductItems />
      </div>
    </section>
  )
}
