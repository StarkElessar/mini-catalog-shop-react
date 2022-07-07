import React from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './ProductCard'

const ProductItems = React.memo(() => {
  const { items } = useSelector(({ products }) => ({ items: products.items }))

  return (
    <div className='catalog__wrapper'>
      { items && items.map((item) => (<ProductCard key={item.id} {...item} /> )) }
    </div>
  )
})

export default ProductItems