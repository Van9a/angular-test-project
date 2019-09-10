import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'description', 'http://perelmanpeople.com/upload/iblock/480/4807714080b28a63c8fbd36a959610cf.jpg'),
    new Recipe('Test recipe 2 ', 'description', 'http://perelmanpeople.com/upload/iblock/480/4807714080b28a63c8fbd36a959610cf.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
