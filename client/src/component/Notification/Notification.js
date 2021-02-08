import React from "react"

const Notification = ({active,notification}) => {

    return (
        <>
            <div style={{right: active ? "100px" : "-400px" }} className="notification">
                <div className="notification-block">
                    {notification.message}
                </div>
            </div>
        </>
    )
}
export default Notification