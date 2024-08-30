import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-key': '810b5ad51cmsh6b4263bb96460b8p109f45jsnce887155ab8e',
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
};
const baseUrl='https://google-news13.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',

  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/world?lr=en-US`),
    }),
  }),
});


///////////////////////////

// const axios = require('axios');

// const cryptoNewsApi = {
//   method: 'GET',
//   url: 'https://google-news13.p.rapidapi.com/business',
//   params: {lr: 'en-US'},
//   headers: {
//     'x-rapidapi-key': '810b5ad51cmsh6b4263bb96460b8p109f45jsnce887155ab8e',
//     'x-rapidapi-host': 'google-news13.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(cryptoNewsApi);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
