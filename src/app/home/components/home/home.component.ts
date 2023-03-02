import { Component, OnInit } from '@angular/core';

import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { WeatherStateService } from '../../services/weather-state/weather-state.service';
import { Weather } from '../../model/weather.interface';
import { WeatherData } from '../../model/weather-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public tempUnit?: string = 'f';
  public clock?: any;
  private clockInterval?: number;
  private sunset? = new Date();
  private sunrise? = new Date();
  constructor(
    public weatherStateService: WeatherStateService,
    public geocodeStateService: GeocodeStateService
  ) {}

  public ngOnInit() {
    this.weatherStateService.mostRecentWeather.subscribe((data) => {
      this.sunset = data.current?.sunset;
      this.sunrise = data.current?.sunrise;
      const time = data.current?.zonedDate;
      if (time) {
        this.clock = new Date(time);
        this.startClock(this.clock);
      }
      this.getBgImage();
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

  public getBgImage() {
    if (this.sunset && this.sunrise) {
      if (this.clock < this.sunset && this.clock > this.sunrise) {
        return 'day';
      } else {
        return 'night';
      }
    }
    return 'day';
  }
}
