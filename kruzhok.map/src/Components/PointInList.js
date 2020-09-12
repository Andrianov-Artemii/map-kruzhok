import React from 'react'

function PointInList(props)
{
    return(
        <li className="mb-2">
            <div className="card shadow ">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.point.address}</h6>
                <p className="card-text">
                    {props.point.name}
                </p>
                <button href="#!" className="btn btn-outline-primary" onClick={() => props.onOpenPlace(props.point)}>Перейти</button>
            </div>
            </div>
        </li>
    )
}

export default PointInList