
const initialState = {
    id: null,
    login: null,
    message: null,
    token: null

}
export function login(state = initialState, action) {
    switch (action.type) {
        case "ACTIONS_LOGIN":
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                token: action.payload.token,
            };

    }
    return state
}

