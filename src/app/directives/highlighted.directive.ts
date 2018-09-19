import { Directive } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  constructor() {

      console.log("Directive created..");

  }

}
