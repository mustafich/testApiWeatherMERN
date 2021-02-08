import React from 'react';
import "./css/index.css"

import {connect} from "react-redux";
import Notification from "./Notification";





class ContainerNotification extends React.Component {
    state={
        active:false
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            active:true
        })
        setTimeout(()=>{
            this.setState({
                active:false
            })
        },4000)
    }

    render() {
        return (
            <>
                <Notification active={this.state.active} notification={this.props.notification}/>
            </>
        )
    }

}

const mapStateToProps = ({notification}) => {

    return {
        notification,
    }
}
const mapStateToDispatch = dispatch => {
    return {


    };
};
export default connect(mapStateToProps,mapStateToDispatch)(ContainerNotification)

