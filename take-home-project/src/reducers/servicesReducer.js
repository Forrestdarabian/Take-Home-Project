// Reducers return the new value for state after recieving an action

import { FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE } from "../actions";

//Declaring initial state
const initialState = {
    services: null,
    error: "",
    loading: false
};
//Declaring reducer function which takes in state and uses a default argument
const servicesReducer = (state = initialState, action) => {
    console.log('action', action);
    switch(action.type) {
        case FETCH_SERVICES_START:
            return {
                ...state,
                error: "",
                loading: true
            };
            case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                services: action.payload
            };
            case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                services: null
            };
        //Default case returns state so redux can pick up our initial state
        default:
            return state;
    }
};

export default servicesReducer;