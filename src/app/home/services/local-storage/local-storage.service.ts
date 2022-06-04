import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public savedSearch(city: string) {
    const citiesString = localStorage.getItem('search');
    if (citiesString) {
      const cities = JSON.parse(citiesString);
      cities.unshift(city);
      const savedCities = cities.slice(0, 3);
      localStorage.setItem('search', JSON.stringify(savedCities));
    } else {
      localStorage.setItem('search', JSON.stringify([city]));
    }
  }
}
