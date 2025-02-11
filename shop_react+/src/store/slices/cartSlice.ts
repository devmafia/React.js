import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, CartState, Currency } from '../../types/types';

const exchangeRates: Record<Currency, number> = {
    "USD": 1,
    "UAH": 41.18,
    "GBP": 0.76,
    "JPY": 147.92,
};

const saveCartToLocalStorage = (state: CartState) => {
    localStorage.setItem('cart', JSON.stringify(state.items));
    localStorage.setItem('totalPrice', state.totalPrice.toString());
    localStorage.setItem('currency', state.currency);
    localStorage.setItem('convertedTotal', state.convertedTotal.toString());
};

const calculateConvertedTotal = (totalPrice: number, currency: Currency): number => {
    return parseFloat((totalPrice * exchangeRates[currency]).toFixed(2));
};

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    currency: "USD",
    convertedTotal: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state: CartState, action: PayloadAction<Product>) => {
            const item = state.items.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalPrice += action.payload.price;
            state.convertedTotal = calculateConvertedTotal(state.totalPrice, state.currency as Currency);
            saveCartToLocalStorage(state);
        },
        decrementItem: (state: CartState, action: PayloadAction<number>) => {
            const item = state.items.find(product => product.id === action.payload);
            if (item) {
                item.quantity -= 1;
                state.totalPrice -= item.price;
                if (item.quantity === 0) {
                    state.items = state.items.filter(product => product.id !== action.payload);
                }
            }
            state.convertedTotal = calculateConvertedTotal(state.totalPrice, state.currency as Currency);
            saveCartToLocalStorage(state);
        },
        changeCurrency: (state: CartState, action: PayloadAction<Currency>) => {
            state.currency = action.payload;
            state.convertedTotal = calculateConvertedTotal(state.totalPrice, state.currency as Currency);
            saveCartToLocalStorage(state);
        },
        loadCartFromStorage: (state: CartState, action: PayloadAction<CartState>) => {
            state.items = action.payload.items || [];
            state.totalPrice = action.payload.totalPrice || 0;
            state.currency = action.payload.currency || "USD";
            state.convertedTotal = calculateConvertedTotal(state.totalPrice, state.currency as Currency);
        }
    }
});

export const { addItem, decrementItem, changeCurrency, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;