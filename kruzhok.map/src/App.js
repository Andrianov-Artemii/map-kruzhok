import React, { useState, useEffect} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import './App.css';


//Components
import Map from './Components/Map';
import Loader from './Components/Loader';
import Panel from './Components/Panel';
import MenuIcon from './Components/Icons/MenuIcon';
import ModalPanel from './Components/ModalPanel';
import Catalog from './Components/Catalog';

function App(props) {
  const [isOpenPanel, setOpenPanel] = useState(true);
  const [data, setData] = useState(null);
  const [pointsOnPanel, changePointsOnPanel] = useState([]); 
  const [panelInfo, changePanelInfo] = useState(null);

  useEffect(() => {
    getPoints()
  }, [])

  function getPoints()
  {
    fetch('/data.json')
    .then((res) => res.json())
    .catch((res) => null)  
    .then((d) => {
      for(var i = 0; i < d.points.length; i++) d.points[i].id = i;
      console.log(d)
      setData(d)
    })
  }

  function onChangePanel(status)
  {
    setOpenPanel(status)
  }

  function onOpenPlace(point)
  {
    changePanelInfo(point)
  }

  function onClosePlace()
  {
    changePanelInfo(null)
  }

  function setPointsListInPanel(idList)
  {
    var pointsList = []
    idList.map(id => 
    {
      console.log(id)
      pointsList.push(data.points[id])
    })
    changePanelInfo(null)
    changePointsOnPanel(pointsList)
    onChangePanel(true)
  }
  return (
    <div className="App">
      <main style={{width: "100%", height: "100vh"}}>
        {/* <ModalPanel /> */}
        {data == null && <Loader />}
        {data != null &&
        <main className="container-fluid">
  
        
        {isOpenPanel && <Panel onChangePanel={onChangePanel} panelInfo={panelInfo} onOpenPlace={onOpenPlace} onClosePlace={onClosePlace} list={pointsOnPanel}/>}
        
        <Switch>
          <Route path='/catalog'><Catalog points={data.points} /></Route>
          <Route path='/map'><Map points={data.points} setPointsListInPanel={setPointsListInPanel} /></Route>
        </Switch>
        {!isOpenPanel && <button className=" ml-3 mt-3 btn btn-secondary" style={{position: "absolute", top: "0", zIndex: "999"}}onClick={() => onChangePanel(true)}><MenuIcon size="24px"/></button>}
      </main>
}
      </main>
      
    </div>
  );
}
export default App;
