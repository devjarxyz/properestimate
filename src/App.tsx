import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getStatisticsRequest } from './data/covid19/actions';


function App(props: any) {
  useEffect(() => {
    
    props.getStatisticsRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default connect(null, {
  getStatisticsRequest
})(App);
