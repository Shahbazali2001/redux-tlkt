const configureStore = require('@reduxjs/toolkit').configureStore;  

const pizzaReducer = require('../features/pizza/pizzaSlice');  // import the reducer and assign it to a variable ( can be any name ) named pizzaReducer (default import)
const burgerReducer = require('../features/burger/burgerSlice'); // import the reducer and assign it to a variable ( can be any name ) named burgerReducer (default import)

const reduxLogger = require('redux-logger'); // import the redux logger
const logger = reduxLogger.createLogger(); // createLogger is a function that takes in an object as an argument 

// configureStore is a function that takes in an object as an argument
const store = configureStore({
    // reducer is an object that contains the reducers of the application
    reducer : {
        pizza : pizzaReducer,   // Here key 'pizza' is the name of the slice and value pizzaReducer is the reducer of the slice that is imported above
        burger : burgerReducer, // Here key 'burger' is the name of the slice and value burgerReducer is the reducer of the slice that is imported above
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // middleware is an array that contains the middleware of the application
});

console.log(store); // Store contains the reducers of the application and combines them into a single object
module.exports = store; // export the store (default export)