
import { covidDataNames, covidPomberBase } from '../base';
import axios, { AxiosError } from 'axios';
import { CovidInformation, CountryInformation } from '../../covid19/types';

// const rapidKey = '8a0aed8675msh5131f81d254299bp1621bbjsne16df19e24a1';
// const rapidHost = 'covid-193.p.rapidapi.com';

export const covidApi = {

    getStatistics: (): Promise<CovidInformation[]> => {
       
        let url = `${covidPomberBase}${covidDataNames.pomberstatistics}`;

        let result = axios.get(url).then((response: any) => {
            let res: CovidInformation[] = [];
            let result = Object.entries(response.data);
            result.forEach(([key, value]) => {
                let country: CovidInformation = {
                    country: key.toString(),
                    data: value as CountryInformation[]
                };
                res.push(country);
            });
            console.log(res);
           
            return res;
            
        }).catch((error: AxiosError) => {
            console.log(error);
            throw error;
        })

        return result;
    }
}


