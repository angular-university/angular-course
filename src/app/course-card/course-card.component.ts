import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter, Inject,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {

        console.log("coursesService course card" + this.coursesService.id);

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
