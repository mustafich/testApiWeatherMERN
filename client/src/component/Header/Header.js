import React from "react"
import "./css/index.css"
import {Route} from "react-router-dom";




const Header = ({login,ActionLogOut,ActionNotification}) => {

    return (
        <>
            <div>
                <div className="header">
                    <div className="container">
                        <div className="header-block">
                            <div className="header-block_logo">
                                <Route render={({history}) => (
                                    <span onClick={() => {
                                        history.push(`/`)
                                    }}>
                                        <p className="one">Test</p>
                                        <p className="two">Api</p>
                                    </span>
                                )}/>
                            </div>

                            {login.login!==null?
                                <>
                                    <div className="header-block_weather">
                                        <Route render={({history}) => (
                                            <p onClick={() => {
                                                history.push(`/weather`)
                                            }}>
                                                Погода
                                            </p>
                                        )}/>
                                    </div>
                                    <div className="header-block_name">

                                        {login.login}
                                        <span>|</span>
                                        <p onClick={()=>{
                                            ActionLogOut()
                                            ActionNotification()
                                        }}>Выйти</p>
                                    </div>
                                </>

                                :
                                <div className="header-block_authorization">
                                    <div className="header-block_authorization__login">
                                        <Route render={({history}) => (
                                            <p onClick={() => {
                                                history.push(`/login/user`)
                                            }}>
                                                Войти
                                            </p>
                                        )}/>
                                    </div>
                                    <div className="header-block_authorization__registration">
                                        <Route render={({history}) => (
                                            <p onClick={() => {
                                                history.push(`/registration/user`)
                                            }}>
                                                Зарегистрироваться
                                            </p>
                                        )}/>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header