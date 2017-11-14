import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onADD5Counter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSUB5Counter} />

        <button onClick={this.props.onStoreResult}>Store Result </button>
        <ul>
          {this.props.strResult.map(strResult => (
            <li key={strResult.id}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    strResult: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onADD5Counter: () => dispatch({ type: "ADD5", value: 10 }),
    onSUB5Counter: () => dispatch({ type: "SUB5", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
