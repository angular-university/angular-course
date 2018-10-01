import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<ElementRef>;

    constructor() {

    }

    ngAfterViewInit() {

    }

    ngAfterContentInit() {

    }

    ngOnInit() {

    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    cardClasses() {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
    }

    cardStyles() {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')'

        };
    }



}
