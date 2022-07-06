import React from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './ProductCard'

export default function ProductItems() {
  const { items } = useSelector(({ products }) => ({ items: products.items }))

  return (
    <div className='catalog__wrapper'>
      {
        items && items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              {...item}
            />
          )
        })
      }
    </div>
  )
}
