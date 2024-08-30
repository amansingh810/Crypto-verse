import React from 'react'


import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'


function News({simplified}) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 6 : 12 });
console.log(cryptoNews)
  return (
    <div>News</div>
  )
}

export default News