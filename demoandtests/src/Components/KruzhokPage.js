import React from 'react'
import InlineTag from './InlineTag'
const queryString = require('query-string')

function KruzhokPage(props)
{
    const query = queryString.parse(props.location.search)
    const element = props.data[query.krid]
    return(
        <section className="mt-4 container">
            <div className="row">
                <div className="col-8">
                    <h3>{element.name}</h3>
                    <h5>{element.address}</h5>
                    <p className="mt-3">{element.description}</p>
                </div>
            </div>
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

                {}

            </section>
        </section>
    )

}

export default KruzhokPage