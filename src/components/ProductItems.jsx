import React from 'react'
import ProductCard from './ProductCard'

export default function ProductItems({items, onAdd}) {
  return (
    <div className='catalog__wrapper'>
      {
        items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              onAdd={onAdd}
              item={item}
            />
          )
        })
      }
    </div>
  )
}
