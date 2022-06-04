import { Component } from '@angular/core';
import { JsonPrepareService } from './json-prepare.service';
import { Cells } from './types'

@Component({
  selector: 'app-main-scheme',
  templateUrl: './main-scheme.component.html',
  styleUrls: ['./main-scheme.component.scss']
})
export class MainSchemeComponent {
  sections: Array<Cells>

  constructor(svc: JsonPrepareService) {
    this.sections = svc.getPrepared()
  }
}
