import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Comment {
    constructor(props) {
        super(props);
    }

    render() {
        const {values, onIncrement, onDecrement} = this.props;

        return (
            <p>
                Clicked: {values} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
}