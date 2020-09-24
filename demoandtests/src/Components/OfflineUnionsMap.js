import React, { useEffect, useState } from 'react'
import ymaps from 'ymaps'
const queryString = require('query-string')

function OfflineUnionsMap(props)
{
    const[map, setMap] = useState(null)
    const[placemarks, setPlacemarks] = useState([])
    useEffect(() => {createMap()}, [])
    const query = queryString.parse(props.location.search)
    const data = setData()
    function setData()
    {
        var current_data = []

        if(query.krev == 1){
            var d = props.data
            d.map(el => current_data.push(el))
        }
        if(query.krkd == 1){
            var d = props.data.filter(element => element.kd == 1)
            d.map(el => current_data.push(el))
        }
        if(query.krnti == 1){
            var d = props.data.filter(element => element.nti == 1)
            d.map(el => current_data.push(el))
        }
        //if(current_data.length == 0) current_data = props.data
        return current_data
    }


    function createMap()
    {
        if(query.zoom == undefined) query.zoom = 7
        if(query.corx == undefined) query.corx = 55.733
        if(query.cory == undefined) query.cory = 37.588
        ymaps.load().then(maps => {
            setMap(new maps.Map('kruzhok-map', {
            center: [query.corx, query.cory],
            zoom: query.zoom,
            }))
        })
    }
        
    setCollections()

        function setCollections()
            {
                if(map!= null) {
                    ymaps.load().then(maps => {
            var collection = new maps.Clusterer({
                iconColor: 'black',
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            }) 

            if(map.geoObjects != null)
                map.geoObjects.removeAll()
            map.geoObjects.add(collection);

            for(var id = 0; id < data.length; id++){
                collection.add(new maps.Placemark([data[id].latitude, data[id].longitute], {
                    hideIconOnBalloonOpen: true,
                    placemarkId: data[id].id,
                }))
            }

            collection.events.add('click', function (e) {
                e.preventDefault()
                var target = e.get('target')
                var pointsOnClickTarget = [] 
                if(target.options._name == 'cluster') {       
                    target.getGeoObjects().map( point => pointsOnClickTarget.push(point.properties.get('placemarkId')))
                }
                else if(target.options._name == 'geoObject'){
                    pointsOnClickTarget.push(target.properties.get('placemarkId'))
                }
                query.type = target.options._name
                query.pointid = pointsOnClickTarget
                query.corx = target.geometry.getCoordinates()[0]
                query.cory = target.geometry.getCoordinates()[1]
                
                window.location.href = queryString.stringifyUrl({url: '/map', query: query})
                //window.history.replaceState(null, null, queryString.stringifyUrl({url: '/map', query: query}))
            })     
        })
    }
       
    }
    


    return (   
        <div id="kruzhok-map" style={{height: "100vh", width: "100%"}}></div>
    )
}

export default OfflineUnionsMap