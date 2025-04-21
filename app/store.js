const configureStore = require('@reduxjs/toolkit').configureStore;  

const pizzaReducer = require('../features/pizza/pizzaSlice');  // import the reducer and assign it to a variable ( can be any name ) named pizzaReducer (default import)

// configureStore is a function that takes in an object as an argument
const store = configureStore({
    // reducer is an object that contains the reducers of the application
    reducer : {
        pizza : pizzaReducer,   // Here key 'pizza' is the name of the slice and value pizzaReducer is the reducer of the slice that is imported above
    }
});

console.log(store); // Store contains the reducers of the application and combines them into a single object
module.exports = store; // export the store (default export)