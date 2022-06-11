import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
} from 'rxjs';
import { Location } from '../../model/location.interface';
import { Weather } from '../../model/weather.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';
import { WeatherService } from '../../services/weather/weather.service';

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

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

  autoComplete: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((city) =>
        states
          .filter((v) => v.toLowerCase().indexOf(city.toLowerCase()) > -1)
          .slice(0, 10)
      )
    );

  public search(isResearch: boolean = false): void {
    if (!isResearch) {
      this.localStorageService.saveSearch(this.searchFormControl.value);
      this.localStorageService.next(this.localStorageService.retriveSearch());
    }
    this.geocodeService
      .getLatLong(this.searchFormControl.value)
      .pipe(
        take(1),
        tap((response) => {
          if (response?.features && response.features.length === 0) {
            throw new Error('Invalid API response.');
          }
        }),
        map((response) => {
          //function
          if (response?.features && response.features.length > 0) {
            const properties = response.features[0].properties;
            const location: Location = {
              lat: properties.lat,
              lon: properties.lon,
              city: properties.city,
            };
            this.geocodeStateService.next(location);
            return location;
          }
          return {};
        })
      )
      .subscribe({
        next: (location) => {
          this.weatherService
            .getWeatherData(location)
            .pipe(take(1))
            .subscribe((response) => {
              const weather: Weather = {
                current: this.weatherStateService.format(response.current),
                daily: (response.daily as any[]).map((data) =>
                  this.weatherStateService.format(data)
                ),
              };
              this.weatherStateService.next(weather);
              console.log(weather);
            });
        },
        error: (e) => console.error(e), // TODO: display an error. add something
      });
  }

  // Re-search past locations
  public researchLocation(city: string): void {
    const titleCasedCity = this.titleCasePipe.transform(city);
    this.searchFormControl.setValue(titleCasedCity);
    this.search(true);
  }
}
function savedSearch() {
  throw new Error('Function not implemented.');
}
