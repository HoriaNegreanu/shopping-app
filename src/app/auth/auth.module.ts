import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const appRoutes: Routes = [
    { path: '', component: AuthComponent } //for lazy loading, change path:'auth' to empty path
];

@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[
        RouterModule.forChild(appRoutes),
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule{

}