import url from "./../../url"
export function ActionNotification(payload) {
    debugger
    return {
        type: "ACTIONS_NOTIFICATION",
        payload
    }
}
export function ActionLogin(payload) {
    debugger
    return {
        type: "ACTIONS_LOGIN",
        payload
    }
}
export function LoginFetch(body) {

    return (dispatch) => {
        try {
            const serverResponse = fetch(`${url}/authentication/login/user`, {
                method: 'POST',
                body: JSON.stringify({...body}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(async response => {

                return response.json()
            })
            return serverResponse
                .then(response => {
                    dispatch(ActionNotification(response))
                    if(response.success) {
                        dispatch(ActionLogin(response))
                    }
                    return response
                })
                .catch(() => {

                });

        } catch (e) {

        }

    }
}