import React, { useEffect, useState } from "react";
import axios from 'axios';
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom';
import CoinRoute from "./routes/CoinRoute";
import './index.css'

function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins coins={coins}/>} />
        <Route path='/coin' element={<CoinRoute />}>
          <Route path=':coinId' element={<CoinRoute />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
