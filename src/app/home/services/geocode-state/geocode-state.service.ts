import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../../model/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GeocodeStateService {
  private mostRecentSearchState: BehaviorSubject<Location> = new BehaviorSubject<Location>({});
  public mostRecentSearch: Observable<Location> = this.mostRecentSearchState.asObservable();

  public next(newLocation: Location): void {
    this.mostRecentSearchState.next(newLocation);
  }
}
