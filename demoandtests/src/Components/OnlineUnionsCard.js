import React from 'react'
import {Link} from 'react-router-dom'

function OnlineUnioniCard(props)
{

    const element = props.element

    return(
        <div className={"card m-3 " + props.classes}>
            <div className="card-body">
                <h4 className="card-title">{element.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{element.address}</h6>
                <a href={element.site} className="card-link">Сайт</a>
                <Link className="card-link" to={"/kr?krid=" + element.id}>Подробнее</Link>
            </div>
            </div>
    )
}
export default OnlineUnioniCard