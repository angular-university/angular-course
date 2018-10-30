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
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();




    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {


    }

    ngOnInit() {


    }



    onTitleChanged(newTitle: string) {

        this.course.description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }


}
