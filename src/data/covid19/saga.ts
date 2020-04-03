import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from './actions';
import { covidApi } from '../api/services/covidApi';
import { CovidInformation, Covid19RSETypes } from './types';

function* getStatistics() {
    try {
        const result: CovidInformation = yield call(covidApi.getStatistics);
        console.log(result);
        yield put(actions.getStatisticsSuccess({items: result}));
        
    } catch (error) {
        
    }
}
function* watchGetStatisticsRequest() {
    yield takeEvery(Covid19RSETypes.GET_STATISTICS_REQUEST, getStatistics)
}
const statisticsSagas = [
    fork(watchGetStatisticsRequest)
];

export default statisticsSagas;
