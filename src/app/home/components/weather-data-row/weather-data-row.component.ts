import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../model/weather-data.interface';

@Component({
  selector: 'app-weather-data-row',
  templateUrl: './weather-data-row.component.html',
  styleUrls: ['./weather-data-row.component.css'],
})
export class WeatherDataRowComponent implements OnInit {
  @Input()
  public weather!: WeatherData;
  public isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
