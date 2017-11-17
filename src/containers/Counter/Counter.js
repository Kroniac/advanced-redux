import React, { Component } from "react";
import * as actionCreators from "../../store/action/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import "./Counter.css";
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

        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result{" "}
        </button>
        <ul>
          {this.props.strResult.map(strResult => (
            <li
              onClick={() => this.props.onDeleteResult(strResult.id)}
              key={strResult.id}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    strResult: state.res.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onADD5Counter: () => dispatch(actionCreators.add(10)),
    onSUB5Counter: () => dispatch(actionCreators.sub(15)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
