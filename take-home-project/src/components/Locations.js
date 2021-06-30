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
      <h1 clasName="title">Forrest Darabian's Take-Home Project</h1>
      <br />
      <br />
      <h2>Please Select a Location</h2>
      {props.loading && <div>loading...</div>}
      {/* If locations are available, display a div */}
      {props.locations && 
      props.locations.data && 
      (<div>
        {props.locations.data.map((index, key) => {
          return (<div key={key}>
              <div className="boxes">
          {/* <p>ID: {index.id}</p> */}
          {/* <p>Type: {index.type}</p> */}
          {/* <a href={index.links.self}>{index.links.self}</a> */}
          <h3>{index.attributes.name}</h3>
          <p>{index.attributes.street}</p>
          <h4>{index.attributes.city}, {index.attributes.state} {index.attributes.zip}</h4>
          <p>Phone: {index.attributes.phone}</p>
          {/* <p>Video: {index.attributes.isVideo.toString()}</p> */}
          {/* <p>Latitude: {index.attributes.geolocation.lat}</p>
          <p>Longitude: {index.attributes.geolocation.lng}</p>
          <p>Public: {index.attributes.isPublic.toString()}</p> */}
          <a href={index.links.self}>Select</a>
          <br />
              <br />
          </div>
        </div>)}) }
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <br />
      <br />
      <a href={"/"}>
      Go Back
      </a>
      <br />
      <br />
      <br />
      <br />
      <img style={{borderRadius: "20px"}} src="https://images.unsplash.com/photo-1579785627708-d59e5ab655b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
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
