import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from './actions';
import { covidApi } from '../api/services/covidApi';

function* watchGetStatisticsRequest() {
    yield takeEvery(actions.getStatisticsRequest, getStatistics)
}

function* getStatistics() {
    try {
        const result = yield call(covidApi.getStatistics);
        console.log(result);
    } catch (error) {
        
    }
}

const statisticsSagas = [
    fork(watchGetStatisticsRequest)
];

export default statisticsSagas;
