import React from "react"
import Header from "./Header"
import {connect} from "react-redux";
import {ActionNotification} from "../../request/Authorization/Registration";
export function ActionLogOut() {
    return {
        type: "USER_LOGOUT",
    }
}

class ContainerHeader extends React.Component {
    render() {
        return (
            <>
                <Header ActionNotification={this.props.ActionNotification} ActionLogOut={this.props.ActionLogOut} login={this.props.login}/>
            </>
        )
    }
}

const mapStateToProps = ({login}) => {
    return {
        login
    };
};
const mapStateToDispatch = dispatch => {
    return {
        ActionLogOut: () => dispatch(ActionLogOut()),
        ActionNotification: () => dispatch(ActionNotification({message:"Вы,вышли"})),

    };
};

export default connect(mapStateToProps, mapStateToDispatch)(ContainerHeader)


