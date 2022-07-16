import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchProducts } from '../redux/actions/products'

import NavMenu from '../components/NavMenu'
import ProductItems from '../components/ProductItems'

const Catalog = () => {
  const dispatch = useDispatch()
  const { category, sortBy } = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchProducts(category, sortBy))
  }, [category, sortBy, dispatch])

  const dispatchSetCategory = useCallback((brand, name) => {
    dispatch(setCategory(brand, name))
  }, [dispatch])

  const dispatchSetSortBy = useCallback((path, tag, type) => {
    dispatch(setSortBy(path, tag, type))
  }, [dispatch])

  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <NavMenu
          activeCategory={category}
          onClickCategory={dispatchSetCategory}
          activeSortBy={sortBy}
          onClickSortBy={dispatchSetSortBy}
        />
        <ProductItems />
      </div>
    </section>
  )
}

export default memo(Catalog)
