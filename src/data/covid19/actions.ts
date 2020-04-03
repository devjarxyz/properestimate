import { Covid19RSETypes, CovidInformation } from './types';

export const getStatisticsRequest = () => ({
    type: Covid19RSETypes.GET_STATISTICS_REQUEST
});

export const getStatisticsSuccess = ({items}: {items: CovidInformation[]}) => ({
    type: Covid19RSETypes.GET_STATISTICS_SUCCESS,
    payload: {
        items
    }
});

export const getStatisticsError = ({error}: any) => ({
    type: Covid19RSETypes.GET_STATISTICS_ERROR,
    error
});


