import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { WeatherData } from '../../interface/weatherData';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherService]
})
export class WeatherComponent {

  cityName = 'Mumbai';

  data: {
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    city: string;
    description: string;
    icon: string;
  } = {
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    humidity: 0,
    city: '',
    description: '',
    icon: ''
  };

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.cityName) {
      this.weatherService.fetchData(this.cityName).subscribe((data: WeatherData) => {
        this.data.temp = data.main.temp;
        this.data.feelsLike = data.main.feels_like;
        this.data.pressure = data.main.pressure;
        this.data.humidity = data.main.humidity;
        this.data.city = data.name;
        this.data.description = data.weather[0].main;
        this.data.icon = data.weather[0].icon;
      });
    }
  }
}
