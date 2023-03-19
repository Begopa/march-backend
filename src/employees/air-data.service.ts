import axios from 'axios';
import * as process from 'process';
import { getAirStationsResponseType } from '../types/air-station-response.type';

export class AirDataService {
  async getBadAirStations(): Promise<getAirStationsResponseType[]> {
    const { data } = await axios.get(process.env.AIR_DATA_URL, {
      timeout: 30000,
      params: {
        serviceKey: process.env.AIR_DATA_KEY,
        returnType: 'json',
        numOfRows: 10,
      },
    });
    return data.response.body.items;
  }
}
