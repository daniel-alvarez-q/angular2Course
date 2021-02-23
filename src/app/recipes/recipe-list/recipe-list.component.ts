import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pasta Alfredo', 'Attempt at pasta alfredo', 'https://media.olivegarden.com/en_us/images/product/classic-chicken-alfredo-dinner-dpv-590x365.jpg'),
    new Recipe('Honey Garlic Pork', 'Exquisite recipe', 'none')
  ];

  @Output() recipeWasSelected = new EventEmitter <Recipe> ()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(r:Recipe){
    this.recipeWasSelected.emit(r);
  }
 
}
