import Vue from 'vue'
import Vuex from 'vuex'
import product from './product/product.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        purchase: 0.0,
        sell: 0.0,
        balance: 0.0,
    },
    getters,
    mutations, 
    actions,
    modules: {
        product
    }
})