import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherDaily } from '../../model/weather-daily.interface';

@Component({
  selector: 'app-weather-data-daily',
  templateUrl: './weather-data-daily.component.html',
  styleUrls: ['./weather-data-daily.component.css'],
})
export class WeatherDataDailyComponent implements OnInit {
  @Input() public weather!: WeatherDaily;
  @Input() tempUnit: string = '';
  public isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
