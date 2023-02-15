import { Component, Input, OnInit } from '@angular/core';
import { WeatherDaily } from '../../model/weather-daily.interface';

@Component({
  selector: 'app-weather-data-daily',
  templateUrl: './weather-data-daily.component.html',
  styleUrls: ['./weather-data-daily.component.css'],
})
export class WeatherDataDailyComponent implements OnInit {
  @Input()
  public weather!: WeatherDaily;
  public isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
