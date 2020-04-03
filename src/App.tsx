import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getStatisticsRequest } from './data/covid19/actions';
import { RootState } from './data/root-state';
import { CovidInformation } from './data/covid19/types';


interface AppProps {
  getStatisticsRequest: () => {};
  covidState: {
    items: CovidInformation[];
    loading: boolean;
  };
}

function App(props: AppProps) {
  useEffect(() => {
    console.log(props);
    props.getStatisticsRequest();
    //without a parameter you it will be only called once, equivalent to componentDidMount.
    //Also will need lint turned off since it's being a dick. Also use several useEffect where needed 
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(props);

  //Now its tracking changes to covidState since we passed it in.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.covidState])
  const { items, loading } = props.covidState;
  return (

    <div className="App">
      {
        loading && <div>loading...</div>
      } {
      (!loading && items.length > 0) && <div> found {items.length} items</div> 
      }
    </div>
  );
}

const mapDispatchToProps = {
    getStatisticsRequest
  
};

const mapAppStateToProps = (state: RootState) => ({
  covidState: state.covidStatistics
});

export default connect(mapAppStateToProps, mapDispatchToProps)(App);
