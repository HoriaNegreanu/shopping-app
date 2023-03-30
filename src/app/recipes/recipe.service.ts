import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Tasty Schnitzel', 'http://www.cheap-chef.com/wp-content/uploads/2015/04/bakedspaghetti1-610x406.jpg',[new Ingredient('Meat',1), new Ingredient('French Fries',20)]),
        new Recipe('Burger', 'Huge burger', 'http://www.cheap-chef.com/wp-content/uploads/2015/04/bakedspaghetti1-610x406.jpg',[new Ingredient('Buns',2), new Ingredient('Meat',1)])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice(); //returns a copy
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}