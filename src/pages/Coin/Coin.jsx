import React, { useEffect } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'


const Coin = () => {

  const {coinId} = useParams();
  const [coinData , setCoinData] = usestate();


  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-eWMmyfcE1fro3KzFsk15wtXN'}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));

  }

  useEffect(()=> {
    fetchCoinData();
  },[])

  return (

    <div>
      <h2>Coin : {coinId}</h2>
    </div>
  )
}

export default Coin
