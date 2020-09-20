import React, { useState } from 'react'
import Card from './Card'

function Catalog(props)
{
  
    return(
        <section>
        
        <div className="container-fluid mt-5">
            <div className="row justify-content-between">
                {props.points.map(point =>  {
                        if(point.region == "online") return <Card point={point} key={point.id}/>
                })                 
                }
            </div>
        </div>
        </section>
    )
}

export default Catalog