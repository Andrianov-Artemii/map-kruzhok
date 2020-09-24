import React, { useState, useEffect } from 'react'
import { Router } from 'react-router-dom'
import './App.css'

import Routes from './Components/Routes'



const queryString = require('query-string')


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPoints()
  }, [])

  function getPoints()
  {
    fetch('data.json')
    .then((res) => res.json())
    .catch((res) => null)  
    .then((d) => {
      setData(d)
    })
  }

  return (
    <div className="App">
      {data === null && <div>Загрузка...</div>}
      {data !== null && <Routes data={data.points} datakd={data.kdpoints}/>}
    </div>
  );
}

export default App;
