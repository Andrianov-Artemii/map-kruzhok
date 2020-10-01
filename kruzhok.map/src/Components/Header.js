import React from 'react'
import {Link} from 'react-router-dom'


function Header(props)
{
    return(
        <header className="container-fluid mt-2 mb-2 ">
                    <Link className="mr-2" to={"/map?krev=1&krkd=1&krnti=1"}>Карта Кружков</Link>
                    <Link to={"/catalog?filters=all"}>Кружки Онлайн</Link>
        </header>
    )
}

export default Header
