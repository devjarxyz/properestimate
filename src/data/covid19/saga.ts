import { takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

function* watchGetStatisticsRequest() {
    yield takeEvery(actions.getStatisticsRequest, getStatistics)
}

function* getStatistics() {
    try {
        
    } catch (error) {
        
    }


}