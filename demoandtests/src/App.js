import React, { useState, useEffect } from 'react'
import { Router } from 'react-router-dom'
import './App.css'

import Header from './Components/Header'
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
      <Header />
      {data === null && <div>Загрузка...</div>}
      {data !== null && <Routes data={data.points} datakd={data.kdpoints}/>}
    </div>
  );
}

export default App;


// const Page1 = (props) => {
//   const data = props.data
//   const id = queryString.parse(props.location.search).id
//   const restid = queryString.parse(props.location.search).restId
//   console.log(restid)
//   const filtered = data.filter(element => element.restId === parseInt(restid))
//   const founded = (filtered.length > 0) ? filtered[0].desc : undefined
//   console.log(filtered)
//   return (
//     <div>
//       {id !== undefined && <h1> {data[id].desc} </h1>}
//       {id === undefined && <h1> Ничего не выбрано</h1>}
//       {founded !== undefined && <p> I found {founded}</p>}
//       {founded === undefined && <p> Can't find this restID</p>}
//     </div>
//   )
// }
