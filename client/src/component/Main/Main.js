import React from "react"
import "./css/index.css"


const Main = ({login}) => {

    return (
        <div className="main">
            <div className="main-block">
                {login.login===null?  <p>Чтобы смотреть контент, надо зарегистрироваться</p>:  <p>Привет, {login.login}</p>}
            </div>

        </div>
    )
}

export default Main