import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../../model/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  includes: any;
  constructor() {
    const cities = this.retriveSearch();
    if (Array.isArray(cities) && cities.length > 0) {
      this.next(cities);
      console.log(cities);
    }
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
  public retriveSearch(): Location[] {
    const searchString = localStorage.getItem('search');
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
