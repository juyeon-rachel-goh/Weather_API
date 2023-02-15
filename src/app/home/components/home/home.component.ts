import { Component, OnInit } from '@angular/core';

import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public tempUnit?: string = 'f';

  constructor(
    public weatherStateService: WeatherStateService,
    public geocodeStateService: GeocodeStateService
  ) {}

  public ngOnInit(): void {}

  public toggleUnit(unit: string) {
    this.tempUnit = unit;
  }
}
