import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCryptoCurrency = createAsyncThunk(
    'crypto/getCryptoCurrency',
    async() => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')

        return response.data;
    }
)

const  cryptoSlice = createSlice({
    name : 'cryptocurrency', // * nombre del slice
    initialState: {
        loading : null,
        cryptocurrency : null,
        error: null,
    },

    // * extrareducers: Es como un reducer con mejoras, en el cual se puede manejar opciones como las generadas por el createAsyncThunk, y estos se pueden utilizar como una función o como una propiedad.
    extraReducers: (builder) => {

        // * cuando la petición se completa exitosamente(fullfilled)
        builder.addCase(getCryptoCurrency.fulfilled, (state,action) =>{
            state.cryptocurrency = action.payload; // guarda los datos recibidos
            state.loading = false; // termina la carga 
            state.error = null; // limpia los errores
        });

        // * cuando la petición está en proceso(pending)
        builder.addCase(getCryptoCurrency.pending, (state)=>{
            state.loading = true;
        });

        // * cuando la petición falle(reject)
        builder.addCase(getCryptoCurrency.rejected, (state)=>{
            state.loading = false;
            state.error = 'request failed';
        });
    }
});

export default cryptoSlice.reducer;