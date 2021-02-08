import url from "./../../url"
export function ActionNotification(payload) {

    return {
        type: "ACTIONS_NOTIFICATION",
        payload
    }
}





export function RegistrationFetch(body) {

    return (dispatch) => {
        try {
            const serverResponse = fetch(`${url}/authentication/register/user`, {
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
                    return response
                })
                .catch(() => {

                });

        } catch (e) {

        }

    }
}