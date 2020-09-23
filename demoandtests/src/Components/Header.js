import React from 'react'
import {Link} from 'react-router-dom'


function Header(props)
{
    return(
        <header className="container-fluid">
            <Link className="mr-2" to={"/map?krev=1&krkd=1&krnti=1"}>Карта Кружков</Link>
            <Link to={"/catalog?filters=all"}>Каталог Кружков</Link>
        </header>
    )
}

export default Header
