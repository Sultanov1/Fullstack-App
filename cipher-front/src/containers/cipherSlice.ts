import {createSlice} from '@reduxjs/toolkit';
import {decodeMessage, encodeMessage} from './cipherThunk';

export interface CipherState {
  encodedMessage: string;
  decodedMessage: string;
  isLoading: boolean;
  error: boolean;
}

const initialState : CipherState = {
  encodedMessage: '',
  decodedMessage: '',
  isLoading: false,
  error: false,
}

const cipherSlice = createSlice({
  name: "cipher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(encodeMessage.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(encodeMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.decodedMessage = action.payload.decoded;
      })
      .addCase(encodeMessage.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
    builder
      .addCase(decodeMessage.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(decodeMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.decodedMessage = action.payload.decoded;
      })
      .addCase(decodeMessage.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
  },
})


export const productReducer = cipherSlice.reducer;