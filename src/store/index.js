import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "Counter",
  initialState: intialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    decrementBy5(state, action) {
      state.counter = state.counter - action.payload;
    },
    togglehandler(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      console.log("user is log in")
    },
    logout(state) {
      state.isAuthenticated = false;
      console.log("user is log out")
    },
  },
});

// const counterReducer = (state= intialState, action) => {
//     if(action.type === 'increment'){
//         return{
//             counter: state.counter + 1,
//             showCounter:state.showCounter
//         };
//     };
//     if(action.type === 'incrementby5'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter:state.showCounter
//         };
//     };
//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter:state.showCounter
//         };
//     };
//     if(action.type === 'decrementby5'){
//         return{
//             counter: state.counter - action.amount,
//             showCounter:state.showCounter
//         };
//     };
//     if(action.type === 'toggle'){
//         return{
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
