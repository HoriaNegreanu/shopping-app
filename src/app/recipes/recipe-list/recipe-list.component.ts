import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'http://www.cheap-chef.com/wp-content/uploads/2015/04/bakedspaghetti1-610x406.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test', 'http://www.cheap-chef.com/wp-content/uploads/2015/04/bakedspaghetti1-610x406.jpg')
  ];

  constructor(){
  }

  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
