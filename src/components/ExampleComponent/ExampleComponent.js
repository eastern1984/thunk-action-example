import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class ExampleComponent extends Component {
    render() {
        return (
            <div>
                <p>Example1 {this.props.exComp2}</p>
                <button onClick={() => this.props.dispatchAct2(123)} >Send</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        exComp2: state.someVar2
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAct1: (value) => dispatch({type: actionTypes.EXAMPLE_ACTION_1, someNewValue: value}),
        dispatchAct2: (value) => dispatch({type: actionTypes.EXAMPLE_ACTION_2, someNewValue: value})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
