const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    burgerBase : 100,
};

const burgerSlice = createSlice(
    {
        name :'burger',
        initialState,
        reducers:{
            burger_order:(state, action) => {
                state.burgerBase = state.burgerBase - action.payload;
            }
        }
    }
)
module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
