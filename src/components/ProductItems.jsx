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
        (isLoaded ? items : [...Array(8)]).map((item, index) => (
          isLoaded
            ? <ProductCard key={item.id} {...item} />
            : <CardSkeleton key={index} isLoaded={false} />
        ))
      }
    </div>
  )
})

export default ProductItems