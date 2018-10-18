import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, DoCheck,
    EventEmitter,
    Input, OnChanges,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements
    OnInit, OnDestroy, OnChanges,
    AfterContentChecked, AfterViewChecked,
    AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();




    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {


        console.log('constructor', this.course);

    }

    ngOnChanges(changes) {

        console.log('ngOnChanges', changes);
    }

    ngOnInit() {

        console.log('ngOnInit');


    }

    ngDoCheck() {
        console.log("ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }


    ngAfterContentChecked() {

        console.log('ngAfterContentChecked');

    }

    ngAfterViewChecked() {

        console.log('ngAfterViewChecked');

    }

    ngOnDestroy() {

        console.log('ngOnDestroy');

    }

    onTitleChanged(newTitle: string) {

        this.course.description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }


}
