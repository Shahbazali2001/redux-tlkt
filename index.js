const store = require('./app/store'); // import the store from the app/store.js file
const burgerActions = require('./features/burger/burgerSlice').burgerActions; // import the burgerActions from the features/burger/burgerSlice.js file
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions; // import the pizzaActions from the features/pizza/pizzaSlice.js file
//const pizzaReducer = require('./features/pizza/pizzaSlice').reducer; // import the pizzaReducer from the features/pizza/pizzaSlice.js file
//const pizzaSlice = require('./features/pizza/pizzaSlice'); // import the pizzaSlice from the features/pizza/pizzaSlice.js file
console.log("First State: " ,store.getState()); // getState() is a function that returns the current state of the application
const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ",store.getState()); // getState() is a function that returns the current state of the application
});

store.dispatch(pizzaActions.pizza_order(15));
store.dispatch(burgerActions.burger_order(5));

unsubscribe();
console.log("First State: " ,store.getState());
// store.dispatch is a function that takes in an action as an argument
// action is an object that contains the type and payload properties
// type is the name of the action
// payload is the data that is passed to the action
// store.dispatch(pizzaActions.pizza_order(5)); // dispatch is a function that takes in an action as an argument