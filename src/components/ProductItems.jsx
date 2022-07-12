import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../redux/actions/cart'

import ProductCard from './ProductCard'
import CardSkeleton from './CardSkeleton'

const ProductItems = React.memo(() => {
  const dispatch = useDispatch()
  const { items, isLoaded } = useSelector(({ products }) => products)

  const dispatchAddItemToCart = React.useCallback((productObject) => {
    dispatch(addProductToCart(productObject))
  })

  return (
    <div className='catalog__wrapper'>
      {
        (isLoaded ? items : [...Array(8)]).map((objectCard, index) => (
          isLoaded
            ? <ProductCard
                key={objectCard.id}
                onClickAddToCart={dispatchAddItemToCart}
                {...objectCard}
              />
            
            : <CardSkeleton key={index} isLoaded={false} />
        ))
      }
    </div>
  )
})

export default ProductItems