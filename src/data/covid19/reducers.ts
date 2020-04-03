import { CovidTypes, CovidInformation,
        Covid19RSETypes } from './types';

import {  } from './actions';

const INITIAL_STATE: covid19State = {
    items: [],
    loading: false,
    error: ''
}

const statisticsReducer = (state = INITIAL_STATE, action: CovidTypes): covid19State => {
    switch(action.type){
        case Covid19RSETypes.GET_STATISTICS_SUCCESS: {
            let items = action.payload;
            return {
                items,
                loading: false

            }
        }
        case Covid19RSETypes.GET_STATISTICS_REQUEST: {
            return {
                items: INITIAL_STATE.items,
                loading: true
            }
        }
        case Covid19RSETypes.GET_STATISTICS_ERROR: {
            return {
                items: INITIAL_STATE.items,
                loading: false,
                error: action.error
            }
        }
        default: 
            return INITIAL_STATE;
    }
}

export interface covid19State {
    items: CovidInformation[];
    loading: boolean;
    error?: any;
}

export default statisticsReducer;

