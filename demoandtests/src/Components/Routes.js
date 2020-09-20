import React from 'react'
import {Route, Switch} from 'react-router-dom'
import OnlineUnioniCatalog from './OnlineUnionsCatalog'
import OfflineUnionsMap from './OfflineUnionsMap'
import KruzhokPage from './KruzhokPage'

function Routes(props)
{
    const data = props.data
    console.log(data)
    return(

        <Switch>
            <Route path="/catalog" render={props=>  <OnlineUnioniCatalog data={data} {...props}/>} />
            <Route path="/map" render={props=>  <OfflineUnionsMap data={data} {...props}/>} />
            <Route path="/kr" render={props=>  <KruzhokPage data={data} {...props}/>} />
        </Switch>
    )
}

export default Routes