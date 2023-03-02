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
  public clock?: any;
  private clockInterval?: number;
  constructor(
    public weatherStateService: WeatherStateService,
    public geocodeStateService: GeocodeStateService
  ) {}

  public ngOnInit() {
    this.weatherStateService.mostRecentWeather.subscribe((data) => {
      const time = data.current?.zonedDate;
      if (time) {
        this.clock = new Date(time);
        this.startClock(this.clock);
      }
    });
  }

  public toggleUnit(unit: string) {
    this.tempUnit = unit;
  }

  private startClock(time: Date) {
    if (this.clockInterval) {
      window.clearInterval(this.clockInterval);
    }
    this.clockInterval = window.setInterval(() => {
      let currentTime = time.setSeconds(time.getSeconds() + 1);
      this.clock = currentTime;
    }, 1000);
  }
}
