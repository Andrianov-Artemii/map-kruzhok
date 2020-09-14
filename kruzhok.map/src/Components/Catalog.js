import React, { useState } from 'react'
import Card from './Card'

function Catalog(props)
{
    const [isFilterAll, setFilterAll] = useState(false)
    const [isFilterNTI, setFilterNTI] = useState(false)
    const [isFilterKD, setFilterKD] = useState(false)

    function setAll()
    {
        setFilterAll(!isFilterAll)
    }

    function setKD()
    {
        setFilterKD(!isFilterKD)
    }

    function setNTI()
    {
        setFilterNTI(!isFilterNTI)
    }

    return(
        <section>
        <div className="container">
            <div className="mt-4 d-flex justify-content-between">
                <div className="form-check d-flex-justify-content-center align-items-center">
                    <input type="checkbox" id="all" onClick={ setAll }/>
                    <label className="form-check-label ml-2" for="all" > Существующий кружок</label>
                </div>

                <div className="form-check d-flex-justify-content-center align-items-center">
                    <input type="checkbox" id="all" onClick={ setKD }/>
                    <label className="form-check-label ml-2" for="all" > Кружок НТИ</label>
                </div>

                <div className="form-check d-flex-justify-content-center align-items-center">
                    <input type="checkbox" id="all" onClick={ setNTI }/>
                    <label className="form-check-label ml-2" for="all" > Площадка поготовки к ОНТИ </label>
                </div>
                
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-between">
                {props.points.map(point =>  {
                        if(isFilterAll) return <Card point={point} key={point.id}/>
                        else if (isFilterKD && point.kd == 1) return <Card point={point} key={point.id}/>
                        else if (isFilterNTI && point.nti == 1) return  <Card point={point} key={point.id}/>
                })                 
                }
            </div>
        </div>
        </section>
    )
}

export default Catalog