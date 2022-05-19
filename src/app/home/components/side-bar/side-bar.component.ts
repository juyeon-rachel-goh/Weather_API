import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, tap, take } from 'rxjs';
import { Location } from '../../model/location.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public searchFormControl: FormControl = new FormControl('')

  constructor(private geocodeService: GeocodeService,
    private geocodeStateService: GeocodeStateService,
    private weatherStateService:WeatherStateService,
    private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  

  public search(): void {       

    this.geocodeService.getLatLong(this.searchFormControl.value)
      .pipe( 
        take(1),
        map(response => {
          if (response?.features && response.features.length > 0) {
            const properties = response.features[0].properties 
            const location: Location = {
              lat: properties.lat,
              lon: properties.lon,
              city: properties.city
            };
            this.geocodeStateService.next(location);
            return location
          }
          return {}
        }),
        tap(location => {
          this.weatherService.getWeatherData(location).pipe(take(1)).subscribe(response => {
            console.log(response)
            const weather = this.weatherStateService.format(response);
            this.weatherStateService.next(weather)
          })
        })
      )

      .subscribe()
  }

}
