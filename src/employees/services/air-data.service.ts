import axios from 'axios';
import * as process from 'process';
import { getAirStationsResponseType } from '../../types/air-station-response.type';

/**
 * 통합대기환경지수 나쁨 이상 측정소 조회
 */
export class AirDataService {
  async getBadAirStations(): Promise<getAirStationsResponseType[]> {
    // 한국환경공단_에어코리아_대기오염정보 Open API 요청 주소
    const { data } = await axios.get(process.env.AIR_DATA_URL, {
      timeout: 30000,
      params: {
        // 한국환경공단_에어코리아_대기오염정보 Open API 인증키
        serviceKey: process.env.AIR_DATA_KEY,
        returnType: 'json',
        numOfRows: 10,
      },
    });
    return data.response.body.items;
  }
}
