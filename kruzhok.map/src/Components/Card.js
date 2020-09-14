import React from 'react'

function Card(props)
{

    return(
        <div className="card col-3 m-3" >
            <div className="card-body">
                <h4 className="card-title">{props.point.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.point.address}</h6>
                <a href={props.point.site} className="card-link">Site</a>
            </div>
        </div>
    )

}

export default Card