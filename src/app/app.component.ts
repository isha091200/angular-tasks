import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  // standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, WeatherComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-weather-app';
}
