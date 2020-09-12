import React from 'react'
import BackButtonIcon from './Icons/BackButtonIcon'

function ModalPanel(props)
{

    return(
        <section className="d-flex justify-content-center align-items-center" style={{position: "fixed", height: "100vh", width: "100%", background: "rgba(0, 0, 0, 0.4)", zIndex: "999"}}>
            <container className="rounded container p-4" style={{height: "40vh", width: "40%", background: "white"}}>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </container>
        </section>
    )
}

export default ModalPanel