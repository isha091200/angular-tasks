import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  showForm = false;
  expandedIndex: number | null = null;

  recipes = [
    {
      name: 'Pasta Primavera',
      description: 'Delicious pasta with fresh vegetables.',
      ingredients: 'Pasta, Broccoli, Bell Pepper, Olive Oil'
    },
    {
      name: 'Avocado Toast',
      description: 'Quick and healthy breakfast.',
      ingredients: 'Bread, Avocado, Lemon, Salt'
    },
    {
      name: 'Fruit Smoothie',
      description: 'Refreshing and sweet smoothie.',
      ingredients: 'Banana, Berries, Yogurt, Honey'
    }
  ];

  newRecipe = {
    name: '',
    description: '',
    ingredients: ''
  };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitRecipe() {
    this.recipes.push({ ...this.newRecipe });
    this.newRecipe = { name: '', description: '', ingredients: '' };
    this.showForm = false;
  }

  toggleDetails(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
