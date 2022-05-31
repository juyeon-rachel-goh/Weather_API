import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../../../../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeocodeService {
  constructor(private httpClient: HttpClient) {}
  public getLatLong(search: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://api.geoapify.com/v1/geocode/search?text=${search}&apiKey=${config.geoApifyKey}`
    );
  }
}
