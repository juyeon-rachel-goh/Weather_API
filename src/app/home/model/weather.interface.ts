import { WeatherDaily } from './weather-daily.interface';
import { WeatherData } from './weather-data.interface';

export interface Weather {
  current?: WeatherData;
  daily?: WeatherDaily[];
}
