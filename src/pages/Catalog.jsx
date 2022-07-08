import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchProducts }  from '../redux/actions/products'

import NavMenu from '../components/NavMenu'
import ProductItems from '../components/ProductItems'

const Catalog = React.memo(() => {
  const dispatch = useDispatch()
  const { category, sortBy } = useSelector(({ filters }) => filters)
  
  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [category, sortBy])

  const dispatchSetCategory = React.useCallback((brand, name) => {
    dispatch(setCategory(brand, name))
  }, [])
  const dispatchSetSortBy = React.useCallback((type, name) => {
    dispatch(setSortBy(type, name))
  }, [])

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
})

export default Catalog
