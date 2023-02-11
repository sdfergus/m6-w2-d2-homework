import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch( { type: 'INCREMENT' } );
  }

  decrement = () => {
    this.props.dispatch( { type: 'DECREMENT' } );
  }

  reset = () => {
    this.props.dispatch( { type: 'RESET' } );
  }

  render() {
    return (
      <div className='border border-primary p-2 m-2 w-25'>
        <h2>Counter</h2>
        <div className='bg-info p-3'>
          <span className='text-white border p-2 mx-2'>{this.props.count}</span>
          <button className='mx-3' onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button className='mx-3' onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

//Function that returns the state data from Redux
function mapStateToProps( state ) {
  return {
    count: state.count
  };
}

//*** 'connect' the Counter component to Redux
// export default Counter;
export default connect( mapStateToProps )( Counter );