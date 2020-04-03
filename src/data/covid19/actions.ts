import { StatisticsTypes } from "./types";

export const getStatisticsRequest = () => ({
    type: StatisticsTypes.GET_STATISTICS_REQUEST
});

export const getStatisticsSuccess = ({items}: any) => ({
    type: StatisticsTypes.GET_STATISTICS_SUCCESS,
    payload: {
        items
    }
});

export const getStatisticsError = ({error}: any) => ({
    type: StatisticsTypes.GET_STATISTICS_ERROR,
    error
});


