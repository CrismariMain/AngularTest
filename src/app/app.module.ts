import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonPrepareService } from './main-scheme/json-prepare.service';
import { MainSchemeComponent } from './main-scheme/main-scheme.component';

@NgModule({
  declarations: [	
    AppComponent,
      MainSchemeComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [JsonPrepareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
