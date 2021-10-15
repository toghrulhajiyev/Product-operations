import Vue from 'vue'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

    }
}

const mutations = {
    updateProductList(state, product) {
        return state.products.push(product);
    }
}

const actions = {
    initApp({ commit }) {
        // Vue resource operations
    },

    saveProduct({ commit }, product) {
        Vue.http.post("https://products-operations-default-rtdb.firebaseio.com/products.json", product)
        .then((response) => {
            product.id = response.body.name;
            commit('updateProductList', product)
        });
    },

    sellProduct({ commit }, payload) {
        // Vue resource operations
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}