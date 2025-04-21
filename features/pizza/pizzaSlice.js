const createSlice = require('@reduxjs/toolkit').createSlice;
initialState = {
    //State nothing but a simple object
    pizzaBase : 1000,

};
const pizzaSlice = createSlice(
    //createSlice is a function that takes in an object as an argument
    {
        name : 'pizza',   //name of the slice
        initialState,     //initialState is an object that contains the initial state of the application

        //Reducers is an object that contains functions that are used to update the state
        reducers: {
        //Reducers have action creator functions that are used to update the state
            pizza_order : (state, action) => {
                //action creator pizza_order function takes in two parameters state and action
                //action is an object that contains the type and payload properties
                //action.type is the name of the action
                //action.payload is the data that is passed to the action
                //state is the current state of the application
                state.pizzaBase = state.pizzaBase - action.payload;

            },

        }
    
        
    }
);
console.log(pizzaSlice); // By default createSlice returns an object with two properties reducer and actions
module.exports = pizzaSlice.reducer; // export the reducer  (default export), simply reducer is a function that is used to update the state
module.exports.pizzaActions = pizzaSlice.actions; // export the actions (named export), simply pizzActions is an object that contains the action creators

