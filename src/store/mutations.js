export const updateTradeResult = (state, payload) => {
    if(payload.count) {
        state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
        state.sale += parseFloat(payload.sale) * parseInt(payload.count);

    } else {
        state.purchase += parseFloat(payload.purchase);
        state.sale += parseFloat(state.sale);
        console.log('Else: ', state.purchase);

    }
    
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
}