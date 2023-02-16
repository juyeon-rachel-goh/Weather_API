export interface WeatherData {
  zonedDate?: Date;
  feelsLike: number;
  tempF: number;
  tempC: number;
  sunrise: Date;
  sunset: Date;
  humidity: number;
  windSpeed: number;
  description: string;
  mainDescription: string;
  iconUrl: string;
}
