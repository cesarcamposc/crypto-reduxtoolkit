import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from '../store/cryptoSlice'

export const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
    }
});