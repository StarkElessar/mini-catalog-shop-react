import React from 'react'
import ProductCard from './ProductCard'

export default function ProductItems({ items }) {
  return (
    <div className='catalog__wrapper'>
      {
        items.map((item) => {
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
