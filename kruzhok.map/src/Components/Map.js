import React, { useEffect } from 'react'
//Yandex Map port
import ymaps from 'ymaps';


function Map(props)
{
    useEffect(() => {createMap(options)}, [])
    function createMap(options)
    {
        try {
            ymaps.load().then(maps => {
              const map = new maps.Map(options.container, {
                center: [-8.369326, 115.166023],
                zoom: 7,
                controls: []
              });
            var placemarks = []

            var collection = new maps.Clusterer({
                iconColor: 'black',
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            }) 
            map.geoObjects.add(collection);
            for(var id = 0; id < props.points.length; id++){
                collection.add(new maps.Placemark([props.points[id].latitude, props.points[id].longitute], {
                    hideIconOnBalloonOpen: true,
                    placemarkId: id,
                }))
            }

            collection.events.add('click', function (e) {
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