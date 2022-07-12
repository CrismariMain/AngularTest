import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSchemeComponent } from './main-scheme.component';
import { JsonPrepareService } from './json-prepare.service';

@NgModule({
  declarations: [	
    MainSchemeComponent
   ],
  providers: [JsonPrepareService],
  imports: [CommonModule],
  exports: [MainSchemeComponent]
})
export class MainSchemeModule { }
