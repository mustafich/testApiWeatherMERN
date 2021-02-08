import React from 'react';
import "./css/index.css"

import {connect} from "react-redux";

import Router from "./component/Router/Router";
import ContainerNotification from "./component/Notification/ContainerNotification";
import ContainerHeader from "./component/Header/ContainerHeader";


class App extends React.Component {


    render() {
        return (
            <div className="App">
                <ContainerNotification/>
                <ContainerHeader/>
                <div className="container">
                    <Router/>
                </div>
            </div>
        )
    }

}

const mapStateToProps = () => {

    return {}
}
const mapStateToDispatch = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapStateToDispatch)(App)

