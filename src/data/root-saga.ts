import statisticsSagas from './covid19/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...statisticsSagas
    ])
}