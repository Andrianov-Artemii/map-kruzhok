import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InlineTag from './InlineTag'
import ymaps from 'ymaps'
const queryString = require('query-string')

function KruzhokPage(props)
{
    const query = queryString.parse(props.location.search)
    const element = props.data[query.krid]

    console.log(element)

    setQuery()
    function setQuery()
    {
        var localQuery = query
        localQuery.zoom = 20
        localQuery.corx = element.latitude
        localQuery.cory = element.longitute
        console.log(localQuery)
        return localQuery
    }
    useEffect(() => {createMap()}, []) 
    function createMap(){
        ymaps.load().then(maps => {
            var map = new maps.Map('mini-map', {
            center: [element.latitude, element.longitute],
            zoom: 20,
            controls: []
            })
            map.geoObjects.add(new maps.Placemark([element.latitude, element.longitute]))
        }
        )
        
    }

    return(
        <section className="mt-4 container">
            <div className="row">
                <div className="col-8">
                    <h3>{element.name}</h3>
                    <h5>{element.address}</h5>
                    <p className="mt-3">{element.description}</p>
            <div id="littleMap" className="col" style={{height: "auto"}}></div>
            {element.site != "" && <a href={element.site}>Перейти на сайт кружка</a>}
            <h6 className="mt-3 ">О кружке</h6>
            <div className="mt-3">
                <p>{element.themes.split(',').map(theme => 
                    <InlineTag title={theme} />
                )}</p>
            </div>
            <section className="ml-4">
                {element.region != "" && <p>Регион: {element.region}</p>}
                {element.phone != "" && <p>Телефон: {element.phone}</p>}
                {element.mail != "" && <p>Почта: <a href={element.mail}>{element.mail}</a></p>}
                {element.vk != "" && <p>ВКонтакте: <a href={element.vk}>{element.vk}</a></p>}
                {element.facebook != "" && <p>Facebook: <a href={element.facebook}>{element.facebook}</a></p>}
                {element.instagram != "" && <p>Instagram: <a href={element.instagram}>{element.instagram}</a></p>}
                {element.telegram != "" && <p>Telegram: <a href={element.telegram}>{element.telegram}</a></p>}

                {element.price == 0 && <p>Бесптлатная основа</p>}
                {element.price == 1 && <p>Есть платные услуги</p>}

                <div className="alert alert-secondary" role="alert">
                    Существующий кружок
                </div>
                {element.kd == 1 && <div className="alert alert-success" role="alert">
                    <Link to={'/krkd?krid=' + element.id}>Кружок НТИ</Link>
                </div>}
                {element.nti == 1 && <div className="alert alert-primary" role="alert">
                    Площадка НТИ
                </div>}



            </section>
            </div>
            {element.region != "online" && <div className="col"> 
                <div id="mini-map" style={{width: "300px", height: "300px"}}></div>     
                <Link to={queryString.stringifyUrl({url: '/map?krev=1&krkd=1&krnti=1', query: setQuery()})}>Перейти к Всероссийкой карте</Link>
            </div>}
            </div>
        </section>
    )

}

export default KruzhokPage