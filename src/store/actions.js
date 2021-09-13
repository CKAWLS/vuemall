export const actions = {
  addCart(context, pro) {
    let oldPro = context.state.product.find( item => item.id === pro.id)

    if(oldPro) {
      context.commit('addCounter', oldPro)
    }else {
      pro.count = 1
      context.commit('addPro', pro)
    }
  }
}
