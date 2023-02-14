import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import {
  map,
  switchMap,
  tap,
  take,
  catchError,
  of,
  throwError,
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  iif,
} from 'rxjs';
import { Location } from '../../model/location.interface';
import { Weather } from '../../model/weather.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';
import { WeatherService } from '../../services/weather/weather.service';
import { utcToZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl('');
  public isCollapsed = true;

  constructor(
    private geocodeService: GeocodeService,
    private geocodeStateService: GeocodeStateService,
    public weatherStateService: WeatherStateService,
    private weatherService: WeatherService,
    public localStorageService: LocalStorageService,
    public titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit(): void {}

  public model: any;

  autoComplete: OperatorFunction<string, Location[]> = (
    text$: Observable<string>
  ) => {
    return text$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((search) => {
        return iif(
          () => !search.trim(),
          of([]),
          this.geocodeService.getLatLong(search).pipe(
            map((response) => {
              const features = response.features as any[];
              return features.map((feature) => {
                const properties = feature.properties;
                const location: Location = {
                  lat: properties.lat,
                  lon: properties.lon,
                  city: properties.city,
                  formatted: properties.formatted,
                };
                return location;
              });
            })
          )
        );
      })
    );
  };
  public onSelect(event: NgbTypeaheadSelectItemEvent<Location>): void {
    this.searchFormControl.setValue(event.item);
    this.search();
  }
  public formatter = (location: Location) => {
    const formatted = location.formatted;
    if (formatted) {
      return formatted;
    } else {
      return '';
    }
  };

  public search(isResearch: boolean = false): void {
    if (!isResearch) {
      this.localStorageService.saveSearch(this.searchFormControl.value);
      this.localStorageService.next(this.localStorageService.retriveSearch());
    }
    this.geocodeStateService.next(this.searchFormControl.value);
    this.weatherService
      .getWeatherData(this.searchFormControl.value)
      .pipe(take(1))
      .subscribe((response) => {
        const weather: Weather = {
          current: this.weatherStateService.formatCurrent(response),
          daily: (response.daily as any[]).map((data) =>
            this.weatherStateService.formatDaily(data)
          ),
        };
        this.weatherStateService.next(weather);
        console.log(weather);
      });
  }

  // Re-search past locations
  public researchLocation(location: Location): void {
    this.searchFormControl.setValue(location);
    this.search(true);
  }
}
function savedSearch() {
  throw new Error('Function not implemented.');
}
