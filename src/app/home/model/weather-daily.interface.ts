export interface WeatherDaily {
  zonedDate: Date;
  tempHighF: number;
  tempLowF: number;
  tempHighC: number;
  tempLowC: number;
  humidity: number;
  description: string;
  mainDescription: string;
  iconUrl: string;
}
