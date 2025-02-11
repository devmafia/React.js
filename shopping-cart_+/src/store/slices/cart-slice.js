
import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
            console.log(action.payload)
        },
        removeFromCart(state, action) {
            state.splice(action.payload.id-1, 1)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;