import React from 'react'
import {Link} from 'react-router-dom'
import PointInList from './PointInList'
import PointOnPanel from './PointOnPanel'
import ExitIcon from './Icons/ExitIcon'

function Panel(props)
{
   

    function setAll()
    {
        props.setFilterAll(!props.isFilterAll)
    }

    function setKD()
    {
        props.setFilterKD(!props.isFilterKD)
    }

    function setNTI()
    {
        props.setFilterNTI(!props.isFilterNTI)
    }



    if(props.list == null) props.onChangePanel(false)
    console.log(props.panelInfo)
    return(
        <div className="container-fluid panel" style={{position: "absolute", top: "0", height: "100vh", background: "white", zIndex: "999"}}>
                <div className="d-flex justify-content-end"><button className="btn" onClick={() => props.onChangePanel(false)}><ExitIcon size="24px" /></button></div>  
                <div className="d-flex">
                    <Link to="/map">Оффлайн</Link>
                    <Link className="ml-4" to="/catalog">Онлайн</Link>
                </div>

                <div className="container mb-3">
                <div className="mt-4 d-flex justify-content-between">
                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={props.isFilterAll} onClick={ setAll }/>
                        <label className="form-check-label ml-2" for="all" > Существующий кружок</label>
                    </div>

                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={props.isFilterKD} onClick={ setKD }/>
                        <label className="form-check-label ml-2" for="all" > Кружок НТИ</label>
                    </div>

                    <div className="form-check d-flex-justify-content-center align-items-center">
                        <input type="checkbox" id="all" checked={props.isFilterNTI} onClick={ setNTI }/>
                        <label className="form-check-label ml-2" for="all" > Площадка поготовки к ОНТИ </label>
                    </div>
                    
                </div>
            </div>


            {props.list.length == 0 && !props.panelInfo && 
            <section>
                <p>
                    Карта позволяет сформировать общее представление о масштабе кружкового движения в России, разнообразии тематик и форматов кружков, о том, какие кружки уже активно вовлечены в развитии современных технологий.
                    Карта будет регулярно обновляться, для того, чтобы попасть на карту, достаточно заполнить анкету (ссылка на страницу анкеты). На карте будут появляться дополнительные возможности по определению своего статуса в Кружковом движении. На данный момент на карте обозначены кружки Национальной технологической инициативы (ссылка на страницу про статус Кружков НТИ) и топ-30 лучших площадок подготовки к Олимипиаде КД НТИ.
                </p>
                <p> Всего на карте: <strong>{props.length}</strong></p>
            </section>
            
            }

               {props.panelInfo != null &&
                    <PointOnPanel onClosePlace={props.onClosePlace} panelInfo={props.panelInfo}/>
                }
            {props.list != null && <ul>
                { props.panelInfo == null &&
                    props.list.map(point =>
                        <PointInList point={point} onOpenPlace={props.onOpenPlace} key={point.id} />
                )}

                </ul> }
         
        </div>
    )

}

export default Panel