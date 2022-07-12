const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload
      }
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload
      }
    case 'ADD_PRODUCT_TO_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload]
      }
      // все товары обьеденённые в один массив:
      // (или: Object.values(newItems).flat())
      const mergedArray = [].concat.apply([], Object.values(newItems))
      const totalPrice = (mergedArray.reduce((total, {price}) => total + price, 0)).toFixed(2)

      return {
        ...state,
        items: newItems,
        totalCount: mergedArray.length,
        totalPrice
      }
    }
    case 'CLEAR_CART':
      return {
        ...state
      }
    default:
      return state
  }
}

export default cart