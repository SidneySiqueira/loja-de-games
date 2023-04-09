import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  selectProduct:
    | {
        name: string;
        description: string;
        subDescription: string;
        image: string;
        price: string;
        shipping: boolean;
        category: string;
      }
    | [];
}

const initialState: ProductState = {
  selectProduct: {
    description: "",
    image: "",
    name: "",
    price: "",
    shipping: true,
    subDescription: "",
    category: "",
  },
};

const selectProductSlice = createSlice({
  name: "selectProduct",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<any>) {
      state.selectProduct = action.payload;
    },
    removeSelected(state) {
      state.selectProduct = [];
    },
  },
});

export const { setSelectedProduct, removeSelected } =
  selectProductSlice.actions;

export default selectProductSlice.reducer;
