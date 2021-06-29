// Actions are dispatched messages that pass through reducers

import axios from 'axios';
export const FETCH_SERVICES_START = "FETCH_SERVICES_START";
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_SERVICES_FAILURE = "FETCH_SERVICES_FAILURE";

export const getServices = () => dispatch => {
    dispatch({ type: FETCH_SERVICES_START });
    axios.get("https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?filter[clinicianId]=2")
    .then(res => dispatch({ type: FETCH_SERVICES_SUCCESS, payload: res.data}))
    .catch(error => {
        console.log(error, error.response);
        dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.response });
    });
};