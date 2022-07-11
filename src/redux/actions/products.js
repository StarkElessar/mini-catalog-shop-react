import axios from 'axios'

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchProducts = (category, sortBy) => (dispatch) => {
  console.log(category.brand, sortBy.type)
  const activeTag = category.brand === 'all' ? '' : `brand=${category.brand}`
  
  
  
  dispatch(setLoaded(false))
  axios.get(`http://localhost:3004/products?${activeTag}&_sort=${sortBy.type}&_order=desc`).then(({ data }) => {
    dispatch(setProducts(data))
  })
}

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
})