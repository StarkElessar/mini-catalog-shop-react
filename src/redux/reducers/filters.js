const initialState = {
  category: { brand: 'all', name: 'все' },
  sortBy: { path: 'rating', tag: 'популярности', type: 'desc' },
  allCategories: [],
  allSorting: [],
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        allCategories: action.payload
      }
    case 'GET_ALL_SORTING':
      return {
        ...state,
        allSorting: action.payload
      }
    default:
      return state
  }
}

export default filters