import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

//creating the slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            //payload must be an new itwem to add to the cart
            state.cart.push(action.payload)
        },
        DelItem(state, action) {
            //payload will be the id of the pizza that u want to delete from the cart
            console.log("MHU");
            console.log("Payload (pizzaId):", action.payload);
            console.log("Current cart:", state.cart);
            console.log("Item IDs in cart:", state.cart.map(item => item.id));
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
            console.log("Cart after filter:", state.cart);
        },
        IncreaseItemQuantity(state, action) {
            //now to increase the quantity of an item we need id
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity++;
            item.totalPrice = item.unitPrice * item.quantity;


        },
        DecreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice -= item.unitPrice;

            if (item.quantity === 0) return cartSlice.caseReducers.DelItem(state, action);
        },
        ClearCart(state) {
            state.cart = [];
        }
    }
})


export const { addItem, DelItem, IncreaseItemQuantity, DecreaseItemQuantity, ClearCart } = cartSlice.actions

export default cartSlice.reducer;

export const getCart = (state) => {
    return state.cart.cart;
}
export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}
export const getTotalCartPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}
export const getCurrQuantity = (id) => (state) => {
    return state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
}