import { Covid19RSETypes } from "./types";

export const getStatisticsRequest = () => ({
    type: Covid19RSETypes.GET_STATISTICS_REQUEST
});

export const getStatisticsSuccess = ({items}: any) => ({
    type: Covid19RSETypes.GET_STATISTICS_SUCCESS,
    payload: {
        items
    }
});

export const getStatisticsError = ({error}: any) => ({
    type: Covid19RSETypes.GET_STATISTICS_ERROR,
    error
});


