import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Location } from '../../model/location.interface';
import { config } from './../../../../../config';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  public getWeatherData(location: Location): Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${config.openWeatherMapApiKey}&units=imperial`)
  }
}
