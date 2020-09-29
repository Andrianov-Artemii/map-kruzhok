import React, {useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import OnlineUnioniCatalog from './OnlineUnionsCatalog'
import OfflineUnionsMap from './OfflineUnionsMap'
import KruzhokPage from './KruzhokPage'
import KruzhokNTIPage from './KruzhokNTIPage'
import Panel from './Panel'

import MenuIcon from './Icons/MenuIcon';
import Header from './Header'

function Routes(props)
{
    const [isOpenPanel, setOpenPanel] = useState(true);
    const data = props.data
    const datakd = props.datakd
    return(
        <main>
        <Switch>
            <Route path="/catalog" render={props=>
                <catalog>
                    <Header />
                    <OnlineUnioniCatalog data={data} {...props}/>  
                </catalog>
            }/>
            <Route path="/map" render={props=> 
                <map>
                    {isOpenPanel && <Panel data={data} {...props} onChangePanel={setOpenPanel}/>}
                    <OfflineUnionsMap data={data} {...props}/>
                </map>
                } 
            />
            <Route path="/kr" render={props=>  
                <page>
                    <Header />
                    <KruzhokPage data={data} {...props}/> 
                </page>
                } 
            />
            <Route path="/krkd" render={props=>
                <page>
                    <Header />
                    <KruzhokNTIPage datakd={datakd} data={data} {...props}/>} 
                </page>
                } 
            />
            <Redirect from="/" to="/map?krev=1&krkd=1&krnti=1" />
        </Switch>
      
        {!isOpenPanel && <button className=" ml-3 mt-3 btn btn-secondary" style={{position: "absolute", top: "0", zIndex: "999"}}onClick={() => setOpenPanel(true)}><MenuIcon size="24px"/></button>}
        </main>
    )
}

export default Routes