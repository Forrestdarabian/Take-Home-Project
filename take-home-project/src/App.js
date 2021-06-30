import React, { useEffect } from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { getServices } from './actions';
function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getServices())}, [])
  console.log(props);
  return (
    <div className="App">
      <h1>Take-Home Project</h1>
      {props.loading && <div>loading...</div>}
      {/* If services are available, display a div */}
      {props.services && 
      props.services.data && 
      (<div>
        {props.services.data.map((index, key) => {
          return (<div key={key}>
          <p>{index.id}</p>
          <p>{index.attributes.description}</p>
          <p>{index.attributes.duration}</p>
          <p>{index.attributes.rate}</p>
          <p>{index.attributes.callToBook}</p>
        </div>)}) }
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      {/* <button onClick={props.getServices}>View all Services</button> */}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "this is our state")
  return {
    services: state.services,
    error: state.error,
    loading: state.loading,

  };
};

export default connect(mapStateToProps, { getServices })(App);
