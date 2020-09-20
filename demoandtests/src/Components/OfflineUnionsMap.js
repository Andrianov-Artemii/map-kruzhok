import React, { useEffect, useState } from 'react'
import ymaps from 'ymaps'
const queryString = require('query-string')

function OfflineUnionsMap(props)
{
    const[map, setMap] = useState(null)
    const[placemarks, setPlacemarks] = useState([])
    useEffect(() => {createMap(options)}, [])
    const query = queryString.parse(props.location.search)
    const data = setData()
    function setData()
    {
        var current_data = []

        if(query.krev == 1){
            var d = props.data
            d.map(el => current_data.push(d))
        }
        if(query.krkd == 1){
            var d = props.data.filter(element => element.kd == 1)
            d.map(el => current_data.push(d))
        }
        if(query.krnti == 1){
            var d = props.data.filter(element => element.nti == 1)
            d.map(el => current_data.push(d))
        }

        console.log(current_data[0])
        return current_data[0]
    }

    console.log(data[0][17])

    function createMap(options)
    {
            ymaps.load().then(maps => {
                setMap(new maps.Map(options.container, {
                center: [-8.369326, 115.166023],
                zoom: 7,
            /// controls: []
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
                var pointsList = [] 
                console.log(target.options)
                window.location.search += "geo=" + target.id;
               
            })            
        })
    }
       
    }

    //Map generate options
    var options =
    {
        container: 'kruzhok-map',
        x: 0,
        y: 0,
        zoom: 7
    }
    //Start to generate map
    


    return (   
        <div id="kruzhok-map" style={{height: "100vh", width: "100%"}}></div>
    )
}

export default OfflineUnionsMap