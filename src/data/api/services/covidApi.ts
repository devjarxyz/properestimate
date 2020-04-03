
import { covidDataNames, covidBase } from '../base';
import axios, { AxiosError } from 'axios';
import { CovidInformation } from '../../covid19/types';

const rapidKey = '8a0aed8675msh5131f81d254299bp1621bbjsne16df19e24a1';
const rapidHost = 'covid-193.p.rapidapi.com';

export const covidApi = {

    getStatistics: (): Promise<CovidInformation[]> => {
       
        let url = `${covidBase}${covidDataNames.statistics}`;

        let result = axios.get(url, {
            headers: {
                "x-rapidapi-host": rapidHost,
                "x-rapidapi-key": rapidKey,
                
            }
        }).then((response: any) => {
            return response.data.response as CovidInformation[];
            
        }).catch((error: AxiosError) => {
            console.log(error);
            throw error;
        })

        return result;
    }
}


