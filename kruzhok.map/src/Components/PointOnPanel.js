import React from 'react'
import InlineTag from './InlineTag'
import InfoListElement from './InfoListElement'
import BackButtonIcon from './Icons/BackButtonIcon'

function PointOnPanel(props)
{
    return(
        <div>
        <button className="btn" onClick={() => props.onClosePlace()}><BackButtonIcon size="24px" />Назад</button>    
        <p>{props.panelInfo.address}</p>
        <h5 className="mb-2">{props.panelInfo.name}</h5>
        <p>{props.panelInfo.themes.split(',').map(theme => 
                <InlineTag title={theme} />
        )}</p>
        {props.panelInfo.sait != undefined && <a href={props.panelInfo.sait} class="btn btn-primary btn-sm">Перейти на сайт</a>}
        {props.panelInfo.phone != undefined &&
         props.panelInfo.mail != undefined && 
         props.panelInfo.vk != undefined &&
         props.panelInfo.facebook != undefined &&
         props.panelInfo.instagram != undefined &&
         props.panelInfo.telegram != undefined && <p className="text-danger mt-3">Контактные данные</p>}
        {props.panelInfo.phone != undefined && <InfoListElement title={props.panelInfo.phone} />} 
        {props.panelInfo.mail != undefined && <InfoListElement title={props.panelInfo.mail} />} 
        {props.panelInfo.vk != undefined && <InfoListElement title={props.panelInfo.vk} />} 
        {props.panelInfo.facebook != undefined && <InfoListElement title={props.panelInfo.facebook} />} 
        {props.panelInfo.instagram != undefined && <InfoListElement title={props.panelInfo.instagram} />} 
        {props.panelInfo.telegram != undefined && <InfoListElement title={props.panelInfo.telegram} />} 


        <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-secondary">Существующий кружок</p>
            </div>
        {props.panelInfo.kd != 0 && 
            <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-success">Кружок НТИ</p>
            </div>
        }
        {props.panelInfo.kd != 0 && 
            <div class="list-group mb-2">
            <p href="#!" class="list-group-item list-group-item-primary">Площадка подготовки к ОКДНТИ</p>
            </div>
        }
        </div>
    )
}

export default PointOnPanel