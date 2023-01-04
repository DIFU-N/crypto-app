import React from 'react'
import CoinItem from './CoinItem'
import { Link } from "react-router-dom";
import CoinRoute from '../routes/CoinRoute';

const Coins = (props) => {
  return (
    <div className='m-auto max-w-[1140px]'>
        <div>
            <div className='flex justify-between items-center bg-[#26272b] shadow-[0_0_12px_#18191b] rounded-lg m-[2rem_1rem] p-[.7rem_1rem] font-bold'>
                <p>#</p>
                <p className='-ml-[4rem]'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='sm:hidden'>Volume</p>
                <p className='sm:hidden'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<CoinRoute />} key={coins.id}>
                        <CoinItem coins={coins}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins