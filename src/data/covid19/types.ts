export const baseType = 'covid19';

export const GET_STATISTICS_REQUEST = `${baseType}/get_statistics_request`;
export const GET_STATISTICS_SUCCESS = `${baseType}/get_statistics_success`
export const GET_STATISTICS_ERROR = `${baseType}/get_statistics_error`;

export interface GetStatisticsRequestAction {
    type: typeof GET_STATISTICS_REQUEST
};

export interface GetStatisticsSuccesAction {
    type: typeof GET_STATISTICS_SUCCESS,
    payload: CovidInformation[]
};

export interface GetStatisticsErrorAction {
    type: typeof GET_STATISTICS_ERROR,
    error: any
};

export interface CovidInformation {
    country: string;
    cases: {
        new: string;
        active: number;
        critical: number;
        recovered: number;
        total: number;
    };
    deaths: {
        new: string;
        total: number;
    }
    day: string;
    time: string;

}

export type CovidTypes = GetStatisticsRequestAction | GetStatisticsSuccesAction | GetStatisticsErrorAction;