export const setCategory = (brand) => ({
  type: 'SET_CATEGORY',
  payload: brand,
})

export const setSortBy = (sortByType) => ({
  type: 'SET_SORT_BY',
  payload: sortByType
})