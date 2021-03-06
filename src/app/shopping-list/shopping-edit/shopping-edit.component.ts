import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:true}) nameInputRef:ElementRef;
  @ViewChild('amountInput', {static:true}) amountInputRef:ElementRef;

  @Output () ingredientAdded = new EventEmitter <Ingredient> (); //instead of passing an object I preferred to pass the Ingredient model per se

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient (name, amount));
  }

}
