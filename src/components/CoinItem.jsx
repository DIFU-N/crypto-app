import React from 'react'

const CoinItem = (props) => {
  return (
    <div>
        <p>{props.coins.market_cap_rank}</p>
        <div>
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.current_price}</p>
        <p>{props.coins.price_change_percentage_24h}</p>
        <p>{props.coins.total_volume}</p>
        <p>{props.coins.market_cap}</p>
    </div>
  )
}

export default CoinItem