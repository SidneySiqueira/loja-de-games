import { Product } from "@/Utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Api {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface Props {
  item: string,
  patchData: Product
}

const initialState: Api = {
  products: [],
  status: "idle",
  error: null,
};

const url = "https://api-loja-de-games-default-rtdb.firebaseio.com"

export const fetchApi = createAsyncThunk("api/fetch", async () => {
  const response = await axios.get(`${url}/products.json`);  
  return response.data;
});

export const AddApi = createAsyncThunk("api/post", async (postData: Product) => { 
  const response = await axios.post(`${url}/products.json`, postData);      
  return response.data;
});

export const updateApi = createAsyncThunk("api/update", async ({ item, patchData }:Props, { getState }) => { 
  const response = await axios.patch(`${url}/products/${item}.json`, patchData);  
  return response.data;
});

export const deleteApi = createAsyncThunk("api/delete", async (itemId: string) => {
  const response = await axios.delete(`${url}/products/${itemId}.json`);        
  return itemId;
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(AddApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(AddApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(updateApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = Object.values(action.payload);
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        state.products[index] = action.payload;
      })
      .addCase(updateApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(deleteApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteApi.fulfilled, (state, action) => {        
        state.status = "succeeded";
        const productsArray = Object.values(action.payload);
        if (Array.isArray(state.products)) {
          state.products = state.products.filter((product) => {
            return !productsArray.some((deletedProduct) => (deletedProduct as unknown as Product).id === product.id);
          });
        }
      })
      .addCase(deleteApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export default apiSlice.reducer;