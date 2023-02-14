import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../../model/weather-data.interface';
import { Weather } from '../../model/weather.interface';
import { utcToZonedTime } from 'date-fns-tz';
@Injectable({
  providedIn: 'root',
})
export class WeatherStateService {
  private mostRecentWeatherData: BehaviorSubject<Weather> =
    new BehaviorSubject<Weather>({});
  public mostRecentWeather: Observable<Weather> =
    this.mostRecentWeatherData.asObservable();

  public formatCurrent(response: any): WeatherData {
    const date = new Date(response.current.dt * 1000);
    const timeZone = response.timezone;
    const zonedDate = utcToZonedTime(date, timeZone!);
    return {
      zonedDate: zonedDate,
      feelsLike: response.current.feels_like,
      temperature: response.current.temp,
      uvIndex: response.current.uvi,
      description: response.current.weather[0].description,
      mainDescription: response.current.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`,
    };
  }

  public formatDaily(response: any): WeatherData {
    return {
      dateTime: response.dt * 1000,
      feelsLike: response.feels_like.day,
      temperature: response.temp.day,
      uvIndex: response.uvi,
      description: response.weather[0].description,
      mainDescription: response.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
    };
  }

  public next(weather: Weather): void {
    this.mostRecentWeatherData.next(weather);
  }
}
