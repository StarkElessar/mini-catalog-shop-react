export const addProductToCart = (productObject) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productObject
})

export const clearCart = () => ({ type: 'CLEAR_CART' })