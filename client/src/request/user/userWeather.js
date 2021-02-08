import url from "./../../url"
import {ActionNotification} from "../Authorization/Login";

export function ActionUserWeather(payload) {
    return {
        type: "ACTIONS_USER_WEATHER",
        payload
    }
}





export function userWeatherFetch(token) {

    return (dispatch) => {
        try {
            const serverResponse = fetch(`${url}/user/weather`, {
                method: 'POST',
                body: JSON.stringify(),
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                }
            }).then(async response => {

                return response.json()
            })
            return serverResponse
                .then(response => {
                    dispatch(ActionUserWeather(response))
                    return response
                })
                .catch((e) => {
                    dispatch(ActionNotification({message:"Надо зарегистрироваться"}))
                });

        } catch (e) {
            console.log(e)

        }

    }
}