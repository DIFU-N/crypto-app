import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import DOMPurify from "dompurify";

const CoinRoute = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
        <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
          <h1>{coin.name}</h1>
        </div>
        <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
          <div className='m-[0.5_0]'>
            <span className='border-[1px_solid_#6900ff] shadow-[0px_0px_8px_#6900ff] bg-[#6900ff] rounded-lg p-[0.2rem]'>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className='grid grid-rows-[repeat(2_1fr)] items-center m-[1rem_0] justify-center'>
            <div className='flex items-center m-[1rem_0]'>
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className='pr-[1rem]'>{coin.name}</p>
              {coin.symbol ? <p className='pr-[1rem]'>{coin.symbol.toUpperCase()}/NGN</p> : null}
            </div>
            <div className='flex items-center justify-center'>
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.ngn.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
          <table className='m-[0.5rem_0]'> 
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.ngn.toFixed(1)}%</p> : null }</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.ngn.toFixed(1)}%</p> : null }</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.ngn.toFixed(1)}%</p> : null }</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.ngn.toFixed(1)}%</p> : null }</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.ngn.toFixed(1)}%</p> : null }</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.ngn.toFixed(1)}%</p> : null }</td>              </tr>
            </tbody>
          </table>
        </div>
        <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
          <div className='grid grid-columns-[repeat(2_1fr)] w-[100%] justify-between m-[0.6rem_0] pb-[0.5rem] border-b-[1px_solid_#808080] md:grid-columns-[1fr]'>
            <div>
              <div className='flex justify-between m-[0.6rem_0] pb-[0.5rem] border-b-[1px_solid_#808080]'>
                <h4>24 Hour Low</h4>
                {coin.market_data_24h?.low_24 ? <p className='text-[#d3d3d3]'>${coin.market_data.low_24.ngn.toLocaleString()}</p> : null }
              </div>
              <div className='flex justify-between m-[0.6rem_0] pb-[0.5rem] border-b-[1px_solid_#808080]'>
                <h4>24 Hour High</h4>
                {coin.market_data_24h?.high_24h ? <p className='text-[#d3d3d3]'>${coin.market_data.high_24h.ngn.toLocaleString()}</p> : null }
              </div>
            </div>
            <div>
              <div className='flex justify-between m-[0.6rem_0] pb-[0.5rem] border-b-[1px_solid_#808080]'>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p className='text-[#d3d3d3]'>${coin.market_data.market_cap.ngn.toLocaleString()}</p> : null }
              </div>
              <div className='flex justify-between m-[0.6rem_0] pb-[0.5rem] border-b-[1px_solid_#808080]'>
                <h4>Circulating Supply</h4>
                {coin.market_data ? <p className='text-[#d3d3d3]'>{coin.market_data.circulating_supply}</p> : null }              
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[740px] m-[1rem_auto] p-[0.7rem_1rem] flex flex-col bg-[#26272b] shadow-[0px_0px_12px_#18191b] rounded-lg md:max-w-[100%] md:m-[0.5rem] md:p-[0_0.5rem]'>
          <div className='m-[1rem_0]'>
            <h3 className='m-[1rem_0]'>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinRoute;