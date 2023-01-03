import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
  return (
    <div>
        <div>
            <div>
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <CoinItem coins={coins} key={coins.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default Coins