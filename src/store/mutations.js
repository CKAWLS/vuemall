export const mutations = {
  addCounter(state, payload) {
    payload.count++
  },
  addPro(state, payload) {
    state.product.push(payload)
  },
  updateChecked(state, payload){
    payload.checked = !payload.checked
  }
}
