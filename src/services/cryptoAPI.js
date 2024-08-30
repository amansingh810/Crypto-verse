import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '810b5ad51cmsh6b4263bb96460b8p109f45jsnce887155ab8e',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  };

  const baseUrl='https://coinranking1.p.rapidapi.com';
  // url: 'https://coinranking1.p.rapidapi.com/stats',


  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
          query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
          query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history`)
        }),
        getExchanges: builder.query({
          query:()=>createRequest(`/Exchanges`)
        })
    })
    });

  export const {
    useGetCryptosQuery , useGetCryptoDetailsQuery , useGetCryptoHistoryQuery, useGetExchangesQuery
  } = cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '810b5ad51cmsh6b4263bb96460b8p109f45jsnce887155ab8e',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };