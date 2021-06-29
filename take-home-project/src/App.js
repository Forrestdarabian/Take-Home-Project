import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getServices } from './actions';
function App(props) {
  return (
    <div className="App">
      <h1>Take-Home Project</h1>
      {props.loading && <div>loading...</div>}
      {/* If services are available, display a div */}
      {props.services && (<div>
        <p>{props.services.id}</p>
      </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <button onClick={props.getServices}>View all Services</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    services: state.services,
    error: state.error,
    loading: state.loading,

  };
};

export default connect(mapStateToProps, { getServices })(App);
