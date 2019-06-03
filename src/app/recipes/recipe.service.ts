import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spring Roll',
        'This is simply a test',
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        [
                new Ingredient('Meat',1),
                new Ingredient('Tomato',2),
        ]),
        new Recipe('Pizza',
        'This is simply a test',
        'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        [
            new Ingredient('Meat',1),
            new Ingredient('Tomato',2),
         ])
      ];
      


      constructor(private slService: ShoppingListService){}


      getRecipes(){
          return this.recipes.slice();
      }


      addIngredientsToShoppingList(ingredients: Ingredient[])
      {
     this.slService.addIngredients(ingredients);
      }
}