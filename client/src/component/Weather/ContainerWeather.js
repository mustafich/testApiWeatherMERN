import React from "react"
import {connect} from "react-redux";
import Weather from "./Weather";

import {userWeatherFetch} from "../../request/user/userWeather";
import {weather} from "../../redux/reducers/Weather/Weather";



class ContainerWeather extends React.Component {
    state = {
        login:null,
        temp: null,
        city: null,

    }
    componentDidMount() {
        this.props.userWeatherFetch(this.props.login.token)
    }

    render() {

        return (
            <>
                <Weather login={this.props.login} city={this.props.weather.city} temp={this.props.weather.temp}/>
            </>
        )
    }
}

const mapStateToProps = ({login,weather}) => {
    return {
        login,
        weather
    };
};
const mapStateToDispatch = dispatch => {
    return {
        userWeatherFetch: (token) => dispatch(userWeatherFetch(token)),
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(ContainerWeather)


