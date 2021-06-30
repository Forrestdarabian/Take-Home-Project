import React, { useEffect } from 'react';
import '../App.css';
import { connect, useDispatch } from 'react-redux';
import { getLocations } from '../actions';

function Locations(props) {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getLocations())}, [])
//   console.log(props.locations.links, "this is our props");
  return (
    <div className="App">
      <h1>Locations</h1>
      {props.loading && <div>loading...</div>}
      {/* If locations are available, display a div */}
      {props.locations && 
      props.locations.data && 
      (<div>
        {props.locations.data.map((index, key) => {
          return (<div key={key}>
          <p>{index.id}</p>
          <p>{index.type}</p>
          <a href={index.links.self}>{index.links.self}</a>
          <p>{index.attributes.city}</p>
          <p>{index.attributes.name}</p>
          <p>{index.attributes.state}</p>
          <p>{index.attributes.street}</p>
          <p>{index.attributes.zip}</p>
          <p>{index.attributes.phone}</p>
          <p>{index.attributes.isVideo.toString()}</p>
          <p>{index.attributes.geolocation.lat}</p>
          <p>{index.attributes.geolocation.lng}</p>
          <p>{index.attributes.isPublic.toString()}</p>
        </div>)}) }
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <a href={"/"}>
      <button>Go Back</button>
      </a>
      {/* <button onClick={props.getLocations}>View all Locations</button> */}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "this is our state")
  return {
    locations: state.locations.locations,
    error: state.locations.error,
    loading: state.locations.loading,

  };
};

export default connect(mapStateToProps, { getLocations })(Locations);
