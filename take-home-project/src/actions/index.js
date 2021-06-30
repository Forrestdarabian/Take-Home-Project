// Actions are dispatched messages that pass through reducers

import axios from 'axios';
import data from "../data.json"
export const FETCH_SERVICES_START = "FETCH_SERVICES_START";
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_SERVICES_FAILURE = "FETCH_SERVICES_FAILURE";

export const getServices = () => dispatch => {
    dispatch({ type: FETCH_SERVICES_START });

if(data) {
    dispatch({ type: FETCH_SERVICES_SUCCESS, payload: data });
} else{
    dispatch({ type: FETCH_SERVICES_FAILURE, payload: "error" });

}

//     axios.get('https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?filter[clinicianId]=2', {
//   headers:{
//     'Accept':' application/vnd.api+json',
// 'Api-Version':' 2020-01-01',
// 'Application-Build-Version':' 0.0.1',
// 'Application-Platform': 'web',
//   }
// })
// .then(res => console.log(res.data))

//     .catch(error => {
//         console.log(error, error.response);
//         dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.response });
//     });
};