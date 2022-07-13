const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}
// Функция для создания единого массива из набора массивов и вложеных обьектов
const mergedArray = (arr) => (Object.values(arr).map((obj) => obj.items)).flat()
// Функия для подсчета цены во всех массивах с 2 цифрами после запятой и с типом: число
const getTotalPrice = (arr) => Number(
  arr.reduce((totalPrice, { price }) => totalPrice + price , 0).toFixed(2)
)

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
      // формирование конкретного товара для добавления в Корзину:
      const currentProductItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]
        
      // Новый обьект добавленных товаров в Корзину:
      const newObjectItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItem,
          totalPrice: getTotalPrice(currentProductItem)
        }
      }

      return {
        ...state,
        items: newObjectItems,
        totalPrice: (getTotalPrice(mergedArray(newObjectItems))),
        totalCount: mergedArray(newObjectItems).length,
      }
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0
      }
    case 'REMOVE_CART_ITEM': {
      const copyCartItems = { ...state.items }
      delete copyCartItems[action.payload]
      
      return { 
        ...state,
        items: copyCartItems,
        totalPrice: getTotalPrice(mergedArray(copyCartItems)),
        totalCount: mergedArray(copyCartItems).length,
      }
    }
    case 'DECREASE_COUNT_ITEMS': {
      const currentItems = state.items[action.payload].items
      const changedItems = currentItems.length > 1
        ? state.items[action.payload].items.slice(1)
        : currentItems
      
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: changedItems,
          totalPrice: getTotalPrice(changedItems)
        }
      }
      
      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(mergedArray(newItems)),
        totalCount: mergedArray(newItems).length
      }
    }
    case 'INCREASE_COUNT_ITEMS': {
      const currentItem = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: currentItem,
          totalPrice: getTotalPrice(currentItem),
        }
      }

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(mergedArray(newItems)),
        totalCount: mergedArray(newItems).length
      }
    }
    default:
      return state
  }
}

export default cart