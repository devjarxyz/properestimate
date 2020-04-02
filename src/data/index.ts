import { combineReducers } from 'redux';
import covidStatisticsReducer from './covid19/reducers';

export default combineReducers({
    covidStatistics: covidStatisticsReducer
})