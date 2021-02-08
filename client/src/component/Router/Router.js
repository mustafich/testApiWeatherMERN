import React from "react"

import {Route, withRouter} from "react-router-dom";
import Login from "../Authorization/Login/Login";
import Registration from "../Authorization/Registration/Registration";
import ContainerWeather from "../Weather/ContainerWeather";
import ContainerMain from "../Main/ContainerMain";









const Router = () => {
    return (
        <>
            <Route exact path="/login/user" render={({history}) => {
                return <Login history={history}/>
            }}/>
            <Route exact path="/registration/user" render={({history}) => {
                return <Registration history={history} />
            }}/>
            <Route exact  path="/weather" render={({history}) => {
                return <ContainerWeather history={history}/>
            }}/>
            <Route exact  path="/" render={({history}) => {
                return <ContainerMain history={history}/>
            }}/>


        </>
    )
}

export default withRouter(Router)