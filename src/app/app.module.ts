import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Store from '../store/main'

import { AppComponent } from './app.component';
import { MainSchemeModule } from './main-scheme/main-scheme.module'

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    Store,
    MainSchemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
