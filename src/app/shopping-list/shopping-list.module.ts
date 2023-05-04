import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

const appRoutes: Routes = [
    { path: '', component: ShoppingListComponent }, //for lazy loading, change path:'shopping-list' to empty path
];

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        RouterModule.forChild(appRoutes),
        FormsModule,
        SharedModule
    ],
    exports:[
    ],
    //providers:[LoggingService]
})
export class ShoppingListModule{
    
}