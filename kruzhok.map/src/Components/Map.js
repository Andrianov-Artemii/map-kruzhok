import React, { useEffect, useState } from 'react'
//Yandex Map port
import ymaps from 'ymaps';


function Map(props)
{
    const[map, setMap] = useState(null)
    const[placemarks, setPlacemarks] = useState([])
    useEffect(() => {createMap(options)}, [])
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
                try{
                    ymaps.load().then(maps => {
            var collectionAll = new maps.Clusterer({
                iconColor: 'black',
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            }) 

            var collectionKD = new maps.Clusterer({
                iconColor: 'black',
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            }) 


            var collectionNTI = new maps.Clusterer({
                iconColor: 'black',
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            }) 
            map.geoObjects.removeAll();
            if(props.isFilterAll)
                map.geoObjects.add(collectionAll);
            if(props.isFilterKD)
                map.geoObjects.add(collectionKD);
            if(props.isFilterNTI)
                map.geoObjects.add(collectionNTI);


            for(var id = 0; id < props.points.length; id++){
                if(props.isFilterAll)
                    collectionAll.add(new maps.Placemark([props.points[id].latitude, props.points[id].longitute], {
                        hideIconOnBalloonOpen: true,
                        placemarkId: id,
                    }))
                else if(props.isFilterKD && props.points[id].kd)
                    collectionKD.add(new maps.Placemark([props.points[id].latitude, props.points[id].longitute], {
                        hideIconOnBalloonOpen: true,
                        placemarkId: id,
                    }))
                else if(props.isFilterNTI && props.points[id].nti)
                collectionNTI.add(new maps.Placemark([props.points[id].latitude, props.points[id].longitute], {
                    hideIconOnBalloonOpen: true,
                    placemarkId: id,
                }))
            }

            collectionAll.events.add('click', function (e) {
                e.preventDefault()
                var target = e.get('target')
                var pointsList = [] 
                if(target.options._name == 'cluster') {       
                    target.getGeoObjects().map( point => pointsList.push(point.properties.get('placemarkId')));
                }
                else if(target.options._name == 'geoObject'){
                    pointsList.push(target.properties.get('placemarkId'))
                }
                props.setPointsListInPanel(pointsList)
            })

            collectionKD.events.add('click', function (e) {
                e.preventDefault()
                var target = e.get('target')
                var pointsList = [] 
                if(target.options._name == 'cluster') {       
                    target.getGeoObjects().map( point => pointsList.push(point.properties.get('placemarkId')));
                }
                else if(target.options._name == 'geoObject'){
                    pointsList.push(target.properties.get('placemarkId'))
                }
                props.setPointsListInPanel(pointsList)
            })


            collectionNTI.events.add('click', function (e) {
                e.preventDefault()
                var target = e.get('target')
                var pointsList = [] 
                if(target.options._name == 'cluster') {       
                    target.getGeoObjects().map( point => pointsList.push(point.properties.get('placemarkId')));
                }
                else if(target.options._name == 'geoObject'){
                    pointsList.push(target.properties.get('placemarkId'))
                }
                props.setPointsListInPanel(pointsList)
                    })
                })
            
        }
        catch (error) {
            console.error("Something went wrong", error);
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

export default Map