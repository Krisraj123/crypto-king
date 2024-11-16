import React from 'react'
import './Home.css'
import { useContext } from 'react'
import { coinContext } from '../../context/CoinContext'

const Home = () => {
  const {allCoin, currency} = useContext(coinContext)
  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br/> Crypto MarketPlace</h1>
            <p>Welcome to the World's largest cryptocurrency MarketPlace.Sign up to explore more about cryptos.</p>
            <form>
                <input type="text " placeholder='Search Crypto..' />
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className='market-cap'>Market cap</p>
            </div>
        </div>


    </div>
  )
}

export default Home
