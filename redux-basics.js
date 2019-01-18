// using here the Node style (this file is independent of React App)
const redux = require('redux');
const createStore = redux.createStore;

// create an initialState JS object
const initialState = {
  counter: 0
}

// Redux basics
// Reducer
// a reducer is a function with two arguments;  state and action
// in this example we defined the state default value
const rootReducer = (state = initialState, action ) => {
  return state;
}

// Store
// create a store with the reducer
const store = createStore(rootReducer);
console.log('store.getState(): ', store.getState());

// Dispatching Action

// Subscription