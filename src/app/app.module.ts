import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainSchemeModule } from './main-scheme/main-scheme.module'
import { MainSchemeComponent } from './main-scheme/main-scheme.component';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    MainSchemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
