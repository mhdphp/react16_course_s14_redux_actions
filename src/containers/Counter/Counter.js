import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.myCounter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
            </div>
        );
    }
}

// this function will return an object with keys = name of the props
// to be used in this component
// myCounter will represent the reducer.js - intialState.counter
const mapStateToProps = state => {
    return {
        myCounter: state.counter
    };
};

// same as above for subscription - modifying the state in reducer.js
// this will be accessed in Counter component as this.props.onIncrementCounter
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubstractCounter: () => dispatch({type: 'SUBSTRACT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Counter);