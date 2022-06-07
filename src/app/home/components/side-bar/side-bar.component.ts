import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, tap, take, catchError, of, throwError } from 'rxjs';
import { Location } from '../../model/location.interface';
import { Weather } from '../../model/weather.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';
import { WeatherService } from '../../services/weather/weather.service';

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
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  public search(): void {
    this.localStorageService.saveSearch(this.searchFormControl.value);
    this.localStorageService.next(this.localStorageService.retriveSearch());

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
}
function savedSearch() {
  throw new Error('Function not implemented.');
}
