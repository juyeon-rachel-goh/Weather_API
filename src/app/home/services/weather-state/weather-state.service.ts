import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../../model/weather-data.interface';
import { Weather } from '../../model/weather.interface';
import { utcToZonedTime } from 'date-fns-tz';
import { WeatherDaily } from '../../model/weather-daily.interface';
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
      sunrise: utcToZonedTime(
        new Date(response.current.sunrise * 1000),
        timeZone
      ),
      sunset: utcToZonedTime(
        new Date(response.current.sunset * 1000),
        timeZone
      ),
      humidity: response.current.humidity,
      windSpeed: response.current.wind_speed,
      description: response.current.weather[0].description,
      mainDescription: response.current.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`,
    };
  }

  public formatDaily(response: any): WeatherDaily {
    const date = new Date(response.dt * 1000);
    const timeZone = response.timezone;
    const zonedDate = utcToZonedTime(date, timeZone!);
    const tempArr: number[] = Object.values(response.feels_like);

    return {
      zonedDate: zonedDate,
      tempHigh: Math.max(...tempArr),
      tempLow: Math.min(...tempArr),
      humidity: response.humidity,
      description: response.weather[0].description,
      mainDescription: response.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
    };
  }

  public next(weather: Weather): void {
    this.mostRecentWeatherData.next(weather);
  }
}
