export interface WeatherData {
  timezone?: string;
  dateTime?: number;
  zonedDate?: Date;
  feelsLike: number;
  temperature: number;
  uvIndex: number;
  description: string;
  mainDescription: string;
  iconUrl: string;
}
