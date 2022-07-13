export const addProductToCart = (productObject) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productObject
})

export const clearCart = () => ({
  type: 'CLEAR_CART'
})

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id
})

export const decreaseCountItems = (id) => ({
  type: 'DECREASE_COUNT_ITEMS',
  payload: id

})

export const increaseCountItems = (id) => ({
  type: 'INCREASE_COUNT_ITEMS',
  payload: id
})