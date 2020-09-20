import React from 'react'
import InfoListElement from './InfoListElement'

function Card(props)
{

    return(
        <div className ="card col-3 m-3" >
            <div className ="card-body">
                <h4 className ="card-title">{props.point.name}</h4>
                <h6 className ="card-subtitle mb-2 text-muted">{props.point.address}</h6>
                <button type="button" className="card-link btn btn-primary" data-toggle="modal" data-target={"#modalId"+props.point.id}>
                    Подробнее
                </button>
                <a href={props.point.site} className="card-link">Сайт</a>
            </div>

            <div className="modal" id={"modalId"+props.point.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
                <div className ="modal-dialog modal-dialog-centered" role="document">
                    <div className ="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenteredLabel">{props.point.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <p className ="text-danger mt-3">{props.point.address}</p>
                        {props.point.phone != undefined &&
                        props.point.mail != undefined && 
                        props.point.vk != undefined &&
                        props.point.facebook != undefined &&
                        props.point.instagram != undefined &&
                        props.point.telegram != undefined && <p className ="text-danger mt-3">Контактные данные</p>}
                        {props.point.phone != undefined && <InfoListElement title={props.point.phone} />} 
                        {props.point.mail != undefined && <InfoListElement title={props.point.mail} />} 
                        {props.point.vk != undefined && <InfoListElement title={props.point.vk} />} 
                        {props.point.facebook != undefined && <InfoListElement title={props.point.facebook} />} 
                        {props.point.instagram != undefined && <InfoListElement title={props.point.instagram} />} 
                        {props.point.telegram != undefined && <InfoListElement title={props.point.telegram} />} 
                    </div>
                    </div>
                </div>

                <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-secondary">Существующий кружок</p>
            </div>
        {props.point.kd != 0 && 


             <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-success">Кружок НТИ</p>
            </div>
            

        }
        {props.point.nti != 0 && 
            <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-primary">Площадка подготовки к ОКДНТИ</p>
            </div>
        }



                </div>


            
        </div>
    )

}

export default Card