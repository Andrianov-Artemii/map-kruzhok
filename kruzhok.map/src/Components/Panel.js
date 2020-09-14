import React from 'react'
import {Link} from 'react-router-dom'
import PointInList from './PointInList'
import PointOnPanel from './PointOnPanel'
import ExitIcon from './Icons/ExitIcon'

function Panel(props)
{
    if(props.list == null) props.onChangePanel(false)
    console.log(props.panelInfo)
    return(
        <div className="container-fluid panel" style={{position: "absolute", top: "0", height: "100vh", background: "white", zIndex: "999"}}>
                <div className="d-flex justify-content-end"><button className="btn" onClick={() => props.onChangePanel(false)}><ExitIcon size="24px" /></button></div>  
                <div className="d-flex">
                    <Link to="/map">Карта</Link>
                    <Link className="ml-4" to="/catalog">Каталог</Link>
                </div>
               {props.panelInfo != null &&
                    <PointOnPanel onClosePlace={props.onClosePlace} panelInfo={props.panelInfo}/>
                }
            {props.list != null && <ul>
                { props.panelInfo == null &&
                    props.list.map(point =>
                        <PointInList point={point} onOpenPlace={props.onOpenPlace} key={point.id} />
                )}

                </ul> }
         
        </div>
    )

}

export default Panel