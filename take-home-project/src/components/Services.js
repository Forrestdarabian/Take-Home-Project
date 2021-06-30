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
      <h1 clasName="title">Forrest Darabian's Take-Home Project</h1>
      <br />
      <br />
      <h2>Please Select a Service</h2>
      {props.loading && <div>loading...</div>}
      {/* If services are available, display a div */}
      {props.services && 
      props.services.data && 
      (<div>
        {props.services.data.map((index, key) => {
          return (<div key={key}>
              <div className="main">
              <div className="boxes">
          {/* <p>ID: {index.id}</p>
          <p>Type: {index.type}</p>
          <a href={index.links.self}>{index.links.self}</a> */}
          <h3>{index.attributes.description}</h3>
          <p>Duration: {index.attributes.duration} Minutes</p>
          {/* <p>Rate: {index.attributes.rate}</p> */}
          {/* <p>Call to Book: {index.attributes.callToBook}</p> */}
          <a href={"/locations"}>
      Select
      </a>
      <br />
              <br />
          </div>
          </div>
        </div>)}) }
        <img style={{borderRadius: "20px"}} src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
        <br />
              <br />
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
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
