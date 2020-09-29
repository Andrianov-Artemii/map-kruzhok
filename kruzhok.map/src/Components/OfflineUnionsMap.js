import React, { useEffect, useState } from 'react'
import ymaps from 'ymaps'
const queryString = require('query-string')

function OfflineUnionsMap(props) {
    const [map, setMap] = useState(null)
    const [placemarks, setPlacemarks] = useState([])
    useEffect(() => { createMap() }, [])
    const query = queryString.parse(props.location.search)
    const data = setData()
    function setData() {
        var current_data = []

        if (query.krev == 1) {
            var d = props.data
            d.map(el => current_data.push(el))
        }
        if (query.krkd == 1) {
            var d = props.data.filter(element => element.kd == 1)
            d.map(el => current_data.push(el))
        }
        if (query.krnti == 1) {
            var d = props.data.filter(element => element.nti == 1)
            d.map(el => current_data.push(el))
        }
        //if(current_data.length == 0) current_data = props.data
        console.log(current_data)
        return current_data
    }

    function currentData() {
        var current_data = []
        if (query.pointid == undefined) current_data = []
        if (query.type == "cluster")
            query.pointid.map(id => {
                var d = props.data.filter(point => point.id == id)
                d.map(point => current_data.push(point))
            })
        else current_data.push(props.data[query.pointid])

        if (current_data[0] == undefined) currentData = []
        return current_data
    }
    function bound(current_data) {
        var minx = current_data[0].latitude
        var miny = current_data[0].longitute
        var maxx = current_data[0].latitude
        var maxy = current_data[0].longitute
        current_data.map(element => {
            if (element.latitude < minx) minx = element.latitude
            if (element.longitute < miny) miny = element.longitute
            if (element.latitude > maxx) maxx = element.latitude
            if (element.longitute > maxy) maxy = element.longitute
        })
        console.log([minx, miny, maxx, maxy])
        return [minx, miny, maxx, maxy]
    }

    function createMap() {
        if (query.corx == undefined) query.corx = 55.733
        if (query.cory == undefined) query.cory = 37.588
        if (query.zoom == undefined) query.zoom = 7
        ymaps.load().then(maps => {
            setMap(new maps.Map('kruzhok-map', {
                center: [query.corx, query.cory],
                zoom: query.zoom,
            }))
        })
    }

    setCollections()

    function setCollections() {
        if (map != null) {
            ymaps.load().then(maps => {
                var collection = new maps.Clusterer({
                    iconColor: 'black',
                    clusterize: true,
                    geoObjectOpenBalloonOnClick: false,
                    clusterOpenBalloonOnClick: false
                })

                if (map.geoObjects != null)
                    map.geoObjects.removeAll()
                map.geoObjects.add(collection);

                for (var id = 0; id < data.length; id++) {
                    if(data[id].latitude != "" && data[id].longitute != "")
                    collection.add(new maps.Placemark([data[id].latitude, data[id].longitute], {
                        hideIconOnBalloonOpen: true,
                        placemarkId: data[id].id,
                    }))
                }

                collection.events.add('click', function (e) {
                    e.preventDefault()
                    var target = e.get('target')
                    var pointsOnClickTarget = []
                    if (target.options._name == 'cluster') {
                        target.getGeoObjects().map(point => pointsOnClickTarget.push(point.properties.get('placemarkId')))
                    }
                    else if (target.options._name == 'geoObject') {
                        pointsOnClickTarget.push(target.properties.get('placemarkId'))
                    }
                    query.type = target.options._name
                    query.pointid = pointsOnClickTarget
                    query.corx = target.geometry.getCoordinates()[0]
                    query.cory = target.geometry.getCoordinates()[1]
                    query.zoom = map.getZoom();
                    window.location.href = queryString.stringifyUrl({ url: '/map', query: query })
                })

                if (query.type != undefined) {
                    var current_data = currentData()
                    var current_bound = bound(current_data)
                    console.log()
                    map.setBounds([[current_bound[0], current_bound[1]], [current_bound[2], current_bound[3]]])
                }
            })
        }

    }



    return (
        <div id="kruzhok-map" style={{ height: "100vh", width: "100%" }}></div>
    )
}

export default OfflineUnionsMap