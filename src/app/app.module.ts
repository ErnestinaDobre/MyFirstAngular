import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { SeparatorComponent } from './separator/separator.component';
import { NavigareComponent } from './navigare/navigare.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PastaComponent,
    SeparatorComponent,
    NavigareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
