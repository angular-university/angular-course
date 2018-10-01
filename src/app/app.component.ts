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
export class AppComponent implements OnInit {


  courses$: Observable<Course[]>;



  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  onToggle(isHighlighted: boolean) {

    console.log(isHighlighted);

  }

  saveCourse(course: Course) {

    console.log('new course', course);

    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!'),
        console.error
      );

  }

}
