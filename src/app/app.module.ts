import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { HighlightDirective } from './directives/highlight.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    HighlightDirective
  ], //all your components, directives, pipes
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //mention services for dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
