import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../reducer/Action_counter';

class Counter_Dispatch extends React.Component {
  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter_Dispatch);