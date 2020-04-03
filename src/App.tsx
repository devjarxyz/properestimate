import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getStatisticsRequest } from './data/covid19/actions';

interface AppProps {
  getStatisticsRequest: () => {};
}

function App(props: AppProps) {
  useEffect(() => {
    console.log('useffect');
    props.getStatisticsRequest();
    //without a parameter you it will be only called once, equivalent to componentDidMount, also will need lint turned off since it's being a dick. Also use several useEffect where needed 
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

const mapDispatchToProps = {
  getStatisticsRequest
}

export default connect(null, mapDispatchToProps)(App);
