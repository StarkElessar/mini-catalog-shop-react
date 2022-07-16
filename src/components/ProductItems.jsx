import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../redux/actions/cart'

import ProductCard from './ProductCard'
import CardSkeleton from './CardSkeleton'

const ProductItems = () => {
  const dispatch = useDispatch()
  const { items, isLoaded } = useSelector(({ products }) => products)

  const dispatchAddItemToCart = useCallback((productObject) => {
    dispatch(addProductToCart(productObject))
  }, [dispatch])

  return (
    <div className='catalog__wrapper'>
      {
        (isLoaded ? items : [...Array(4)]).map((objectCard, index) => (
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
}

export default memo(ProductItems)