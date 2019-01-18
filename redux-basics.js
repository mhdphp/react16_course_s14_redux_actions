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
  if(action.type === 'INC_COUNTER'){
    // always make a copy of the state and change the value
    return {
      ...state,
      // here action is only a number
      counter: state.counter + 1
    }
  }
  if(action.type === 'ADD_COUNTER'){
    // always make a copy of the state and change the value
    return {
      ...state,
      // here we have a value property of the action
      counter: state.counter + action.value
    }
  }
  return state;
}

// Store
// create a store with the reducer
const store = createStore(rootReducer);
console.log('store.getState(): ', store.getState());

// Dispatching Action
// type is important to be one key of the JS object as parameter for dispatch
// the value of type is by convention with capital letters
// store.dispatch(action)
store.dispatch({type: 'INC_COUNTER'});
// here action object has two properties type, and value
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log('after store.dispatch(): store.getState()', store.getState());

// Subscription