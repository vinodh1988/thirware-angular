import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ], //all your components, directives, pipes
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //mention services for dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
