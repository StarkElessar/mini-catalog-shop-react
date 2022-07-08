import axios from 'axios'

export const fetchCategories = () => (dispatch) => {
  axios.get('http://localhost:3004/categories').then(({ data }) => {
    dispatch(getCategory(data))
  })
}
export const fetchSorting = () => (dispatch) => {
  axios.get('http://localhost:3004/sorting').then(({ data }) => {
    dispatch(getSorting(data))
  })
}

export const getCategory = (array) => ({
  type: 'GET_ALL_CATEGORIES',
  payload: array
})

export const getSorting = (array) => ({
  type: 'GET_ALL_SORTING',
  payload: array
})

export const setCategory = (brand, name) => ({
  type: 'SET_CATEGORY',
  payload: { brand, name },
})

export const setSortBy = (type, name) => ({
  type: 'SET_SORT_BY',
  payload: { type, name }
})