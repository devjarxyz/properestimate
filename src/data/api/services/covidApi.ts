
import { covidDataNames, covidBase } from '../base';
import axios, { AxiosError } from 'axios';
import { CovidInformation } from '../../covid19/types';

export const covidApi = () => {
        const getStatistics = async (): Promise<CovidInformation[]> => {
        let url = `${covidBase}${covidDataNames}`;

        let result = await axios.get(url, {
            headers: {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "8a0aed8675msh5131f81d254299bp1621bbjsne16df19e24a1",
                
            }
        }).then((response: any) => {
            console.log(response);
            return response.response as CovidInformation[];
            
        }).catch((error: AxiosError) => {
            console.log(error);
            throw error;
        })

        return result;
    }
}


