import React from 'react'
const queryString = require('query-string')

function KruzhokNTIPage(props)
{
    const query = queryString.parse(props.location.search)
    const element = props.data[query.krid]
    if(props.datakd.filter(el => el.id == query.krid).length == 0) window.location.href = "/krkddesc"
    const elementkd = props.datakd.filter(el => el.id == query.krid)[0]
    return(
        <section className="container mt-5"> 
            <h3>{element.name}</h3>
            {element.site != "" && <a href={element.site}>Перейти на сайт кружка</a>}
            <p>{element.address}</p>
            <p>{element.description}</p>
            <h4>Почему {element.name} - Кружок НТИ</h4>
            <p>{elementkd.description}</p>    

            <div className="d-flex justify-content-center "><img src={elementkd.src} style={{width: "90%", height: "auto", maxWidth: "500px"}}/></div>
            <h6>Технологический уровень</h6>
            <section className="pl-2">
            {elementkd.firstvector.map(vector => 
                <p>{vector.point} {vector.description}</p>
            )}
            </section>

            <h6>Производство</h6>
            <section className="pl-2">
            {elementkd.secondvector.map(vector => 
                <p>{vector.point} {vector.description}</p>
            )}
            </section>

            <h6>Проектная мощность</h6>
            <section className="pl-2">
            {elementkd.thirdvector.map(vector => 
                <p>{vector.point} {vector.description}</p>
            )}
            </section>

            <h6>Командность</h6>
            <section className="pl-2">
            {elementkd.fourthvector.map(vector => 
                <p>{vector.point} {vector.description}</p>
            )}
            </section>

            <h6>Самоопределение</h6>
            <section className="pl-2">
            {elementkd.fifthtvector.map(vector => 
                <p>{vector.point} {vector.description}</p>
            )}
            </section>
            
        </section>
    )
}

export default KruzhokNTIPage