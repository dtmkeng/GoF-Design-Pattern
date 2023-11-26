import { WeatherData } from "./weatherData";

// obaserver
export interface WeatherObserver {
  update(weatherData: WeatherData): void
}
