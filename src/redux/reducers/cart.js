const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((total, {price}) => total + price, 0)

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
      const currentProductItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]
        
      const totalPrice = getTotalPrice(currentProductItem).toFixed(2)
      
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItem,
          totalPrice
        }
      }
      // все товары обьеденённые в один массив:
      // (или: Object.values(newItems).flat())
      // (или: [].concat.apply([], Object.values(newItems)))
      const mergedArray = (Object.values(newItems).map(({items}) => items)).flat()

      return {
        ...state,
        items: newItems,
        totalCount: mergedArray.length,
        totalPrice: getTotalPrice(mergedArray).toFixed(2)
      }
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0
      }
    default:
      return state
  }
}

export default cart