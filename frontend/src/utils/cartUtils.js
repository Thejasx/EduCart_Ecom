export const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    state.itemsPrices = addDecimal(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    state.shippingPrice = addDecimal(Number(state.itemsPrices) > 100 ? 0 : 10);

    state.taxPrice = addDecimal(Number(0.15 * state.itemsPrices));

    state.totalPrice = addDecimal(Number(state.itemsPrices) + Number(state.shippingPrice) + Number(state.taxPrice));

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}