import React from "react"


import {connect} from "react-redux";
import Main from "./Main";


class ContainerMain extends React.Component {
    state={
        login:this.props.login
    }
    componentWillReceiveProps(nextProps, nextContext) {

        this.setState({
            login:nextProps.login
        })
    }

    render() {
        return (
            <>
                <Main login={this.state.login}/>
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
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(ContainerMain)


