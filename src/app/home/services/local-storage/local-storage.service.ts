import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  includes: any;
  constructor() {
    //do stuff
    // check if localstorge has data
    const cities = this.retriveSearch();
    if (Array.isArray(cities) && cities.length > 0) {
      this.next(cities);
      console.log(cities);
    }
    // if it has a data, push .next function
    // if nothing, do nothing
  }

  private mostRecentLocalStorageData: BehaviorSubject<string[]> =
    new BehaviorSubject<string[]>([]);
  public mostRecentLocalStorage: Observable<string[]> =
    this.mostRecentLocalStorageData.asObservable();

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

  public next(cities: string[]): void {
    this.mostRecentLocalStorageData.next(cities);
  }
}
