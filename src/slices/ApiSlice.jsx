import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetcProducts = createAsyncThunk('getProducts', async () => {
  const reponse = await fetch('https://dummyjson.com/products');
  const data =  reponse.json();
  return data;
})

const ApiSlice = createSlice({
  name: 'api',
  initialState : {
    data: [],
    status: null,
    err: null
  },
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetcProducts.rejected, (state, action) => {
        state.status = "Error"
      })
      .addCase(fetcProducts.pending, (state, action) => {
        state.status = "Pending"
      } )
      .addCase(fetcProducts.fulfilled, (state, action) => {
        state.data = action.payload.products
        state.status = "Success"
      } )
  }
})

export default ApiSlice.reducer