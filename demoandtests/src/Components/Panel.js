import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import ExitIcon from './Icons/ExitIcon'
import OnlineUnioniCard from './OnlineUnionsCard'

const queryString = require('query-string')

function Panel(props)
{
    var query = queryString.parse(props.location.search)
    var data = []
    data = setData();

    function setData()
    {
        console.log("redraw")
        var current_data = []
        if(query.type == "cluster")
            query.pointid.map(id => {
                
                var d = props.data.filter(point => point.id == id)
                d.map(point => current_data.push(point))
            })
        else current_data.push(props.data[query.pointid]) 
        if(current_data[0] == undefined) current_data = []
        console.log(current_data)  
        return current_data
    }

    function setFilter(el)
    {
        switch(el){
            case "ev":  query.krev = (query.krev == 1) ? 0 : 1; break
            case "kd":  query.krkd = (query.krkd == 1) ? 0 : 1; break
            case "nti":  query.krnti = (query.krnti == 1) ? 0 : 1; break
        } 
        window.location.href = queryString.stringifyUrl({url: '/map', query: query})
        //window.history.pushState(null, null, queryString.stringifyUrl({url: '/map', query: query}))
    }

    return(
        <div className="container-fluid panel" style={{position: "absolute", top: "0", height: "100vh", background: "white", zIndex: "999"}}>
                <div className="d-flex justify-content-end"><button className="btn" onClick={() => props.onChangePanel(false)}><ExitIcon size="24px" /></button></div>  
                <header className="container-fluid">
                    <Link className="mr-2" to={"/map?krev=1&krkd=1&krnti=1"}>Карта Кружков</Link>
                    <Link to={"/catalog?filters=all"}>Каталог Кружков</Link>
                </header>

                <div className="container mb-3">
                <div className="mt-4 d-flex justify-content-between">
                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={Boolean(query.krev)} onClick={ () => setFilter("ev") }/>
                        <label className="form-check-label ml-2" for="all" >Существующий кружок</label>
                    </div>

                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={Boolean(query.krkd)} onClick={ () => setFilter("kd") }/>
                        <label className="form-check-label ml-2" for="all" > Кружок НТИ</label>
                    </div>

                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={Boolean(query.krnti)} onClick={ () => setFilter("nti") }/>
                        <label className="form-check-label ml-2" for="all" > Площадка поготовки к ОНТИ </label>
                    </div>
                    
                </div>
            </div>


            {data.length == 0 &&
            <section className="mt-5">
                <h3>Добро пожаловать в Карту Кружков</h3>
                <p>
                    Карта позволяет сформировать общее представление о масштабе кружкового движения в России, разнообразии тематик и форматов кружков, о том, какие кружки уже активно вовлечены в развитии современных технологий.
                    Карта будет регулярно обновляться, для того, чтобы попасть на карту, достаточно заполнить анкету (ссылка на страницу анкеты). На карте будут появляться дополнительные возможности по определению своего статуса в Кружковом движении. На данный момент на карте обозначены кружки Национальной технологической инициативы (ссылка на страницу про статус Кружков НТИ) и топ-30 лучших площадок подготовки к Олимипиаде КД НТИ.
                </p>
                <p> Всего на карте: <strong>{props.data.length}</strong></p>
            </section>
            }

            <section> 
                {data.length != 0 && data.map(element => 
                    <OnlineUnioniCard element={element} classes="mb-2" /> 
                    )}
            </section>
         
        </div>
    )

}

export default Panel