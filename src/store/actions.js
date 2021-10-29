import Vue from 'vue'
export const setTradeResult = ({ commit, state }, tradeResult) => {
    commit('updateTradeResult', tradeResult)
    
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }

    Vue.http.put('https://products-operations-default-rtdb.firebaseio.com/trade-result.json', tradeData)
}

export const getTradeResult = ({ commit }) => {

    Vue.http.get('https://products-operations-default-rtdb.firebaseio.com/trade-result.json')
    .then((resolve) => {
        commit('updateTradeResult', resolve.body);
    });
}