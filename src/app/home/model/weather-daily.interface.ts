export interface WeatherDaily {
  zonedDate: Date;
  tempHigh: number;
  tempLow: number;
  humidity: number;
  description: string;
  mainDescription: string;
  iconUrl: string;
}
