export interface WeatherData {
  zonedDate?: Date;
  feelsLike: number;
  temperature: number;
  sunrise: Date;
  sunset: Date;
  humidity: number;
  windSpeed: number;
  description: string;
  mainDescription: string;
  iconUrl: string;
}
