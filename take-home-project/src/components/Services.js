import React, { useEffect } from 'react';
import '../App.css';
import { connect, useDispatch } from 'react-redux';
import { getServices } from '../actions';

function Services(props) {
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
          <p>{index.type}</p>
          <a href={index.links.self}>{index.links.self}</a>
          <p>{index.attributes.description}</p>
          <p>{index.attributes.duration}</p>
          <p>{index.attributes.rate}</p>
          <p>{index.attributes.callToBook}</p>
        </div>)}) }
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <a href={"/locations"}>
      <button>View Locations</button>
      </a>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "this is our state")
  return {
    services: state.services.services,
    error: state.services.error,
    loading: state.services.loading,

  };
};

export default connect(mapStateToProps, { getServices })(Services);
