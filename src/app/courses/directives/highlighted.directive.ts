import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';
import {CoursesService} from '../courses.service';


@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    constructor(private coursesService: CoursesService) {

        console.log('coursesService highlighted ' + coursesService.id);

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
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
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
