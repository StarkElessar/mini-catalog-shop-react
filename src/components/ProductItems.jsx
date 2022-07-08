import React from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './ProductCard'
import CardSkeleton from './CardSkeleton'

const ProductItems = React.memo(() => {
  const items = useSelector(({ products }) => products.items)
  const isLoaded = useSelector(({ products }) => products.isLoaded)

  return (
    <div className='catalog__wrapper'>
      {
        isLoaded 
          ? items.map((item) => <ProductCard key={item.id} {...item} />)
          : Array(8).fill(0).map((_,index) => <CardSkeleton key={index} />)
      }
    </div>
  )
})

export default ProductItems