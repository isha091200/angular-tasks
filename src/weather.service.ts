import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './interface/weatherData';

const API_KEY = 'd53a772188a3521c495c35484ca84f67'
const URL = 'https://api.openweathermap.org/data/2.5/weather?q'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpClientService: HttpClient) { }

  fetchData(cityName: string): Observable<WeatherData> {
    // const fullUrl = `${URL}=${cityName}&appid=${API_KEY}`;
    const fullUrl = `${URL}=${cityName}&appid=${API_KEY}&units=metric`;
    return this.httpClientService.get<WeatherData>(fullUrl);
  }
}
