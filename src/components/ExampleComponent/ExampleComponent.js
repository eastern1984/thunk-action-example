import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class ExampleComponent extends Component {

    sendRequest(type) { 
        if (type) {
            this.props.dispatchActAsync();
        } else {
            this.props.dispatchActAsyncBad()
        }
    }

    render() {
        return (
            <div>
                <p>Press any key</p>
                <p>{ this.props.message }</p>
                <button onClick={() => this.sendRequest(1)} >Send Async</button>
                <button onClick={() => this.sendRequest(0)} >Send Bad Async</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.msg
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchActAsync: (value) => dispatch(actionCreators.exampleActionAsyns()),
        dispatchActAsyncBad: (value) => dispatch(actionCreators.exampleActionAsynsErr()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
