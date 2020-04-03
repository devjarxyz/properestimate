import { combineReducers } from 'redux';
import covidStatisticsReducer, { covid19State } from './covid19/reducers';

export interface ApplicationState {
    readonly covidStatistics: covid19State;

}

export default combineReducers<ApplicationState>({
    covidStatistics: covidStatisticsReducer
})