import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../../model/weather-data.interface';
import { Weather } from '../../model/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateService {
  private mostRecentWeatherData: BehaviorSubject<Weather> =
    new BehaviorSubject<Weather>({});
  public mostRecentWeather: Observable<Weather> =
    this.mostRecentWeatherData.asObservable();

  public format(apiResponse: any): WeatherData {
    return {
      dateTime: apiResponse.dt * 1000,
      feelsLike: apiResponse?.feels_like?.day ?? apiResponse?.feels_like,
      temperature: apiResponse?.temp?.day ?? apiResponse?.temp,
      uvIndex: apiResponse.uvi,
      description: apiResponse.weather[0]?.description,
      mainDescription: apiResponse.weather[0]?.main,
      iconUrl: `http://openweathermap.org/img/wn/${apiResponse.weather[0]?.icon}@2x.png`,
    };
  }

  public next(weather: Weather): void {
    this.mostRecentWeatherData.next(weather);
  }
}
