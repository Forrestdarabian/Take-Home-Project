// Reducers return the new value for state after recieving an action

import { FETCH_LOCATIONS_START, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE } from "../actions";

//Declaring initial state
const initialState = {
    locations: null,
    error: "",
    loading: false
};
//Declaring reducer function which takes in state and uses a default argument
const locationsReducer = (state = initialState, action) => {
    console.log('action', action);
    switch(action.type) {
        case FETCH_LOCATIONS_START:
            return {
                ...state,
                error: "",
                loading: true
            };
            case FETCH_LOCATIONS_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                locations: action.payload
            };
            case FETCH_LOCATIONS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                locations: null
            };
        //Default case returns state so redux can pick up our initial state
        default:
            return state;
    }
};

export default locationsReducer;