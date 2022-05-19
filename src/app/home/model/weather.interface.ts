import { WeatherData } from "./weather-data.interface";

export interface Weather {
    current?: WeatherData,
    daily?: WeatherData[]
}