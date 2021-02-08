import React from "react"
import "./css/index.css"

const Weather = ({login,city,temp}) => {
debugger
    return (
        <div className="weather">
            <div className="weather-block">
                {login.login===null?
                    <h2>Вы не можете смотреть погоду,так как не зарегистрированы</h2>
                :
                    <>
                        <h2>Ваш город:{city}</h2>
                        <h3>Температура:{temp}</h3>
                    </>

                }
            </div>
        </div>
    )
}

export default Weather