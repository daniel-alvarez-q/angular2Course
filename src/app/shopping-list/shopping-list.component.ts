import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Maple Syrup', 1),
    new Ingredient('Potato', 6)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(i:Ingredient){
    this.ingredients.push(i);
  }

} 
