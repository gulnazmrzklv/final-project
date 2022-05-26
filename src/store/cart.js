import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct(state,action) {

    }
  }
})

export const { addProduct } = cartSlice.actions;


export default cartSlice.reducer;