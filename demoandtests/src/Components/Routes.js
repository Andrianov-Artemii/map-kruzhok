import React, {useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import OnlineUnioniCatalog from './OnlineUnionsCatalog'
import OfflineUnionsMap from './OfflineUnionsMap'
import KruzhokPage from './KruzhokPage'
import KruzhokNTIPage from './KruzhokNTIPage'
import Panel from './Panel'

import MenuIcon from './Icons/MenuIcon';

function Routes(props)
{
    const [isOpenPanel, setOpenPanel] = useState(true);
    const data = props.data
    const datakd = props.datakd
    return(
        <main>
        <Switch>
            <Route path="/catalog" render={props=>  <OnlineUnioniCatalog data={data} {...props}/>} />
            <Route path="/map" render={props=> 
                <map>
                    <Panel data={data} {...props} onChangePanel={setOpenPanel}/>
                    <OfflineUnionsMap data={data} {...props}/>
                </map>
                } 
            />
            <Route path="/kr" render={props=>  <KruzhokPage data={data} {...props}/>} />
            <Route path="/krkd" render={props=>  <KruzhokNTIPage datakd={datakd} data={data} {...props}/>} />
            <Redirect from="/" to="/map?krev=1&krkd=1&krnti=1" />
        </Switch>
      
        {!isOpenPanel && <button className=" ml-3 mt-3 btn btn-secondary" style={{position: "absolute", top: "0", zIndex: "999"}}onClick={() => setOpenPanel(true)}><MenuIcon size="24px"/></button>}
        </main>
    )
}

export default Routes