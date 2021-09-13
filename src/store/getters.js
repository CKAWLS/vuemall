export const getters = {
  cartLength(state) {
    return state.product.length
  },
  cartList(state){
    return state.product
  }
}
