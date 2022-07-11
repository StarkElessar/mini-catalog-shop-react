import axios from 'axios'

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchProducts = (category, sortBy) => (dispatch) => {
  const activeCategoryTag = category.brand === 'all' ? '' : `brand=${category.brand}`
  
  dispatch(setLoaded(false))
  axios.get(`http://localhost:3004/products?${activeCategoryTag}&_sort=${sortBy.path}&_order=${sortBy.type}`)
    .then(({ data }) => dispatch(setProducts(data)))
}

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
})