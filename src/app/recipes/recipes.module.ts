import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesResolverService } from "./recipes-resolver.service";
import { SharedModule } from "../shared/shared.module";

const appRoutes: Routes = [
    {
        path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [ //for lazy loading, change path:'recipes' to empty path
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
        ]
    }
];

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        ReactiveFormsModule,
        SharedModule
    ],
    // exports: [
    //     RecipesComponent,
    //     RecipeListComponent,
    //     RecipeDetailComponent,
    //     RecipeItemComponent,
    //     RecipeStartComponent,
    //     RecipeEditComponent
    // ]
})
export class RecipesModule {

}