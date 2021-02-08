
const initialState = {
    message: false,
    boolean:false

}
export function notification(state = initialState, action) {

    switch (action.type) {
        case "ACTIONS_NOTIFICATION":
            return {
                ...state,
                message: action.payload.message
            };

    }
    return state
}

