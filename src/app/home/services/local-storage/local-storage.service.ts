import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveSearch(city: string) {
    const citiesString = localStorage.getItem('search');
    if (citiesString) {
      const cities = JSON.parse(citiesString);
      cities.unshift(city);
      const saveCities = cities.slice(0, 3);
      localStorage.setItem('search', JSON.stringify(saveCities));
    } else {
      localStorage.setItem('search', JSON.stringify([city]));
    }
  }

  // take out the data out of localstorage
  public retriveSearch(): string[] {
    // get into the local storage using key
    const searchString = localStorage.getItem('search');
    // reformat the data string -> array
    if (searchString) {
      const savedCities = JSON.parse(searchString);
      return savedCities;
    } else {
      return [];
    }
  }
}
