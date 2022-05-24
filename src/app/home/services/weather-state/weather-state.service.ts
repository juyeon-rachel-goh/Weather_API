import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../../model/weather-data.interface';
import { Weather } from '../../model/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherStateService {
  private mostRecentWeatherData: BehaviorSubject<Weather> = new BehaviorSubject<Weather>({});
  public mostRecentWeather: Observable<Weather> = this.mostRecentWeatherData.asObservable();

  public format(apiResponse:any): Weather {
    const current = apiResponse.current
    const weatherData: WeatherData = {
      dateTime: current.dt * 1000,
      feelsLike: current.feels_like,
      temperature: current.temp.toFixed(1),
      uvIndex: current.uvi,
      description: current.weather[0]?.description,
      mainDescription: current.weather[0]?.main
    }
    const weather: Weather = {
      current: weatherData
    }
    return weather
  }

  public next(weather: Weather): void {
    this.mostRecentWeatherData.next(weather);
  }


}


