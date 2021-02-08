import { combineReducers } from "redux";
import {notification} from "./notification/notification";
import {login} from "./authorization/login/login";
import {weather} from "./Weather/Weather";




const appReducer = combineReducers({
    notification,
    login,
    weather
})

const rootReducer = (state, action) => {

    if (action.type === 'USER_LOGOUT') {

        state = undefined
    }

    return appReducer(state, action)
}

// const rootReducer = combineReducers({
//     notification,
//     login,
//     weather
// });
//
export default rootReducer;



