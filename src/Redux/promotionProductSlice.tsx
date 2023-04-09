import { Product } from "@/Utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Api {
    promotionProduct: Product[]
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: Api = {
    promotionProduct: [],
    status: "idle",
    error: null,
};

const url = "https://api-loja-de-games-default-rtdb.firebaseio.com"

export const fetchPromotionProduct = createAsyncThunk("promotionProduct/fetch", async () => {
    const response = await axios.get(`${url}/promotion.json`);
    return response.data;
});

export const addPromotionProduct = createAsyncThunk("promotionProduct/post", async (postData: Product) => {
    const response = await axios.post(`${url}/promotion.json`, postData);
    return response.data;
});

export const updatePromotionProduct = createAsyncThunk("promotionProduct/put", async (postData: Product) => {
    const response = await axios.put(`${url}/promotion.json`, postData);
    return response.data;
});


const promotionProductSlice = createSlice({
    name: "promotionProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPromotionProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPromotionProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.promotionProduct = action.payload;
            })
            .addCase(fetchPromotionProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            })
            .addCase(addPromotionProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addPromotionProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.promotionProduct = action.payload;
            })
            .addCase(addPromotionProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            })
            .addCase(updatePromotionProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updatePromotionProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                if(Array.isArray(state.promotionProduct)) {
                    const index = state.promotionProduct.findIndex((product: Product) => product.id === action.payload.id);
                    state.promotionProduct[index] = action.payload;
                }
            })
            .addCase(updatePromotionProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong.";
            });
    },
});

export default promotionProductSlice.reducer;
