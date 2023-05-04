import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) }, //lazy loading of recipes component
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) }, //lazy loading of shopping list component
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) } //lazy loading of auth component
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })], //PreloadAllModules to cache lazy loading components
    exports: [RouterModule]
})
export class AppRoutingModule {

}