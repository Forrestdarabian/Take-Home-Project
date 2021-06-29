import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Take-Home Project</h1>
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

export default connect(mapStateToProps, null) (App);
