import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../../model/location.interface';

// make sure to parse what we pull out of localstorage

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

  private mostRecentLocalStorageData: BehaviorSubject<Location[]> =
    new BehaviorSubject<Location[]>([]);
  public mostRecentLocalStorage: Observable<Location[]> =
    this.mostRecentLocalStorageData.asObservable();

  public saveSearch(location: Location) {
    const citiesString = localStorage.getItem('search');
    if (citiesString) {
      const cities = JSON.parse(citiesString);
      cities.unshift(location);
      const saveCities = cities.slice(0, 3);
      localStorage.setItem('search', JSON.stringify(saveCities));
    } else {
      localStorage.setItem('search', JSON.stringify([location]));
    }
  }

  // take out the data out of localstorage
  public retriveSearch(): Location[] {
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

  public next(cities: Location[]): void {
    this.mostRecentLocalStorageData.next(cities);
  }
}
