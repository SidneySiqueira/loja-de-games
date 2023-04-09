import { Product } from "@/Utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Api {
    featuredProducts: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: Api = {
    featuredProducts: [],
    status: "idle",
    error: null,
};

const url = "https://api-loja-de-games-default-rtdb.firebaseio.com"

export const fetchFeaturedProduct = createAsyncThunk("featuredProducts/fetch", async () => {
    const response = await axios.get(`${url}/featured.json`);
    return response.data;
});

export const addFeaturedProduct = createAsyncThunk("featuredProducts/post", async (postData: Product) => {
    const response = await axios.post(`${url}/featured.json`, postData);
    return response.data;
});

export const updateFeaturedProduct = createAsyncThunk("featuredProducts/put", async (postData: Product) => {
    const response = await axios.put(`${url}/featured.json`, postData);
    return response.data;
});


const featuredProductsSlice = createSlice({
    name: "featuredProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeaturedProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFeaturedProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.featuredProducts = action.payload;
            })
            .addCase(fetchFeaturedProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            })
            .addCase(addFeaturedProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addFeaturedProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.featuredProducts = action.payload;
            })
            .addCase(addFeaturedProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            })
            .addCase(updateFeaturedProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateFeaturedProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                if(Array.isArray(state.featuredProducts)) {
                    const index = state.featuredProducts.findIndex((product) => product.id === action.payload.id);
                    state.featuredProducts[index] = action.payload;
                }
            })
            .addCase(updateFeaturedProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            });
    },
});

export default featuredProductsSlice.reducer;
