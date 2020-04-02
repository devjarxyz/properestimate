import { GET_STATISTICS_REQUEST, GET_STATISTICS_SUCCESS, GET_STATISTICS_ERROR } from "./types";

export const getStatisticsRequest = () => ({
    type: GET_STATISTICS_REQUEST
});

export const getStatisticsSuccess = ({items}: any) => ({
    type: GET_STATISTICS_SUCCESS,
    payload: {
        items
    }
});

export const getStatisticsError = ({error}: any) => ({
    type: GET_STATISTICS_ERROR,
    error
});


