import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchProducts }  from '../redux/actions/products'

import NavMenu from './NavMenu'
import ProductItems from './ProductItems'

const SectionCatalog = React.memo(() => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const dispatchSetCategory = React.useCallback((brand) => {
    dispatch(setCategory(brand))
  }, [])
  const dispatchSetSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <section className='page__catalog catalog'>
      <div className="catalog__container">
        <NavMenu
          onClickCategory={dispatchSetCategory}
          onClickSortBy={dispatchSetSortBy}
        />
        <ProductItems />
      </div>
    </section>
  )
})

export default SectionCatalog
