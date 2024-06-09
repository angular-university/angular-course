import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input("highlighted") isHighlighted = false;
  @Output() toggleHighlight = new EventEmitter();

  constructor() {
    console.log("directive created...");
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding("class.highlighted")
  get cssClaases() {
    return this.isHighlighted;
  }

  @HostBinding("style.border")
  get cssClasses() {
    return "1px solid red";
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
