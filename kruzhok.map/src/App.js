import React, { useState, useEffect } from 'react';
import './App.css';

//Components
import Map from './Components/Map';
import Loader from './Components/Loader';
import Panel from './Components/Panel';
import MenuIcon from './Components/Icons/MenuIcon';
import ModalPanel from './Components/ModalPanel';

function App() {

  const [isOpenPanel, setOpenPanel] = useState(true);
  const [data, setData] = useState(null);
  const [pointsOnPanel, changePointsOnPanel] = useState([]); 
  const [panelInfo, changePanelInfo] = useState(null);

  useEffect(() => {
    getPoints()
  }, [])

  function getPoints()
  {
    fetch('data.json')
    .then((res) => res.json())
    .catch((res) => null)  
    .then((data) => {
      setData(data)
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
        <main className="container-fluid">
        {data == null && <Loader />}
        {data != null && <Map points={data.points} setPointsListInPanel={setPointsListInPanel}/>}
        {isOpenPanel && <Panel onChangePanel={onChangePanel} panelInfo={panelInfo} onOpenPlace={onOpenPlace} onClosePlace={onClosePlace} list={pointsOnPanel}/>}
        {!isOpenPanel && <button className=" ml-3 mt-3 btn btn-secondary" style={{position: "absolute", top: "0",}}onClick={() => onChangePanel(true)}><MenuIcon size="24px"/></button>}
      </main>
      </main>
    </div>
  );
}
export default App;
