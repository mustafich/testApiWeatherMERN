
const initialState = {
    city: null,
    temp:null

}
export function weather(state = initialState, action) {

    switch (action.type) {
        case "ACTIONS_USER_WEATHER":
            return {
                ...state,
                city: action.payload.body.city,
                temp: action.payload.body.temp,
            };

    }
    return state
}

