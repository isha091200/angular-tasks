import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-recipe-book';
}
