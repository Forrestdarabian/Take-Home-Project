//Declaring initial state
const initialState = {
    services: null,
    error: "",
    loading: false
};
//Declaring reducer function which takes in state and uses a default argument
const reducer = (state = initialState, action) => {
    //Default switch
    switch(action.type) {
        //Default case returns state so redux can pick up our initial state
        default:
            return state;
    }
};

export default reducer;