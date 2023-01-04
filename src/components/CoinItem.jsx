import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='flex justify-between items-center bg-[#26272b] shadow-[0_0_12px_#18191b] rounded-lg m-[2rem_1rem] p-[.7rem_1rem] hover:transform hover:scale-105 hover:cursor-pointer hover:transition hover:ease-in-out hover:duration-100'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='flex items-center'>
            <img src={props.coins.image} className='h-[40px] mr-[8px] w-auto' alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>₦{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='sm:hidden'>₦{props.coins.total_volume.toLocaleString()}</p>
        <p className='sm:hidden'>₦{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem