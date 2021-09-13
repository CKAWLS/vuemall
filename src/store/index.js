import {createStore} from 'vuex'
import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";

export default createStore({
  state: {
    product: []
  },
  mutations,
  actions,
  modules: {},
  getters
})
