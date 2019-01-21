// reducer is a function
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) =>{
  if(action.type === 'INCREMENT'){
    console.log(`state before update: ${state.counter}`); // for testing purposes
    return {
      counter: state.counter + 1
    }
  }
  return state;
};

export default reducer;