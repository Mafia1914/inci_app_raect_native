import {createAsyncThunk} from '@reduxjs/toolkit';
import NetworkManager from './api_manager';

const networkManager = NetworkManager.getInstance();
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const options = {
    method: 'GET',
  };
  const res = await fetch(url, options);
 
  const finalres = await res.json();
  // console.log(finalres);
  return finalres; // Return the actual data from the API response
});