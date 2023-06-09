import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //RecipesModule, //no longer import here, due to lazy loading (ll)
    //ShoppingListModule, //no longer import here, due to ll
    SharedModule,
    CoreModule, //not necessary, used to move the providers to another module and make AppModule leaner
    //AuthModule //no longer import here, due to ll
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
