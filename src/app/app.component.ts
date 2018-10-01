import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {CoursesService} from './services/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

    courses = COURSES;

    @ViewChild(CourseCardComponent, {read:HighlightedDirective})
    highlighted: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;

    courses$: Observable<Course[]>;


    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {
      this.courses$ =  this.coursesService.loadCourses();
    }

    onToggle(isHighlighted:boolean) {

        console.log(isHighlighted);

    }


    ngAfterViewInit() {

        console.log(this.highlighted);


    }

    saveCourse(course:Course) {

      console.log('new course', course);

    }

}
