import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  count: 0
};

//Function that returns the state from redux store
function reducer( state = initialState, action ) {
  // console.log( action );
  switch ( action.type ) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }
}

const store = createStore( reducer );

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render( <App />, document.getElementById( 'root' ) );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
