import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import OnlineUnioniCard from './OnlineUnionsCard'

const queryString = require('query-string')

function OnlineUnioniCatalog(props)
{
      const data = props.data.filter(element => element.region == "online")
      console.log(data)
    return(
        <section className="container">
            <div className="row">
                {data.map(element => 
                    <OnlineUnioniCard element={element} />
                )}
            </div>
        </section>
    )
}

export default OnlineUnioniCatalog