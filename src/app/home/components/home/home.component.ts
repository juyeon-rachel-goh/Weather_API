import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Weather } from '../../model/weather.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public tempUnit: string = 'f';

  constructor(
    public weatherStateService: WeatherStateService,
    public geocodeStateService: GeocodeStateService
  ) {}

  public ngOnInit(): void {}

  public toggleUnit(unit: string) {
    this.tempUnit = unit;
    console.log(this.tempUnit);
  }
}
