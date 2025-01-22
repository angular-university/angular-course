import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {
  @Input() highlighted: boolean = false;

  constructor() {
    console.log('Directive created');
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.highlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }
}
