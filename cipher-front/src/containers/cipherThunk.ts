import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {CodeData} from '../types';

export const encodeMessage = createAsyncThunk('cipher/encode', async (data: CodeData) => {
  console.log('Encode message', data);
  const {data: cipher} = await axiosApi.post('/encode', data);
  return cipher;
})

export const decodeMessage = createAsyncThunk('cipher/decode', async (data: CodeData) => {
  console.log('Decoded message', data)
  const {data: cipher}  = await  axiosApi.post('/decode', data);
  return cipher;
})