export enum Covid19RSETypes{
    GET_STATISTICS_REQUEST = `covid19/get_statistics_request`,
    GET_STATISTICS_SUCCESS = `covid19/get_statistics_success`,
    GET_STATISTICS_ERROR = `covid19/get_statistics_error`
}

export interface GetStatisticsRequestAction {
    type: Covid19RSETypes.GET_STATISTICS_REQUEST
};

export interface GetStatisticsSuccesAction {
    type: Covid19RSETypes.GET_STATISTICS_SUCCESS,
    payload: CovidInformation[]
};

export interface GetStatisticsErrorAction {
    type: Covid19RSETypes.GET_STATISTICS_ERROR,
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

export const GetCovidType = <T extends CovidTypes>(element: GetStatisticsRequestAction | GetStatisticsSuccesAction | GetStatisticsErrorAction, type: Covid19RSETypes): element is T =>{
    return element.type !== undefined && element.type === type;
}