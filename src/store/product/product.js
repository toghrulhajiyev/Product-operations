import Vue from 'vue'
import { router } from '../../router.js'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.id == key
        })
    }
}

const mutations = {
    updateProductList(state, product) {
        return state.products.push(product);
    },
}

const actions = {
    initApp({ commit }) {

        Vue.http.get("https://products-operations-default-rtdb.firebaseio.com/products.json")
            .then((response) => {
                let data = response.body;

                for (let key in data) {
                    data[key].id = key
                    commit('updateProductList', data[key]);
                }

            });
    },

    saveProduct({ dispatch, commit }, product) {

        Vue.http.post("https://products-operations-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                // Update Product List
                product.id = response.body.name;
                commit('updateProductList', product)

                // Update TradeResult
                let productData = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }

                dispatch('setTradeResult', productData);

                // replace() method of router acts like push() method. The only difference is that it navigates without pushing a new history entry.
                router.replace('/');

            });
    },

    sellProduct({ state, commit, dispatch }, payload) {
        let product = state.products.filter(element => {
            return element.id == payload.id;
        });

        let totalCount = product[0].count - payload.count

        if (product) {
            Vue.http.patch('https://products-operations-default-rtdb.firebaseio.com/products/' + payload.id + '.json', { count: totalCount })
                .then((response) => {
                    product[0].count = totalCount;

                    // Update TradeResult
                    let productData = {
                        purchase: 0,
                        count: payload.count,
                        sale: product[0].price,
                    }

                        dispatch('setTradeResult', productData);

                    // replace() method of router acts like push() method. The only difference is that it navigates without pushing a new history entry.
                    router.replace('/');
                });
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}