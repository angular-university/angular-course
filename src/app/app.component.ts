import {Component} from '@angular/core';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {COURSES} from '../db-data';
import {Course} from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent
  ],
  standalone: true
})
export class AppComponent  {

    courses = [...COURSES];

  performPrefetch: boolean = false;

  display: boolean = false;


  onCourseSelected(course: Course) {

    console.log("App component - click event bubble", course);

  }

  trackCourse(index:number, course:Course) {
    return course.id;
  }


  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay() {
    this.display = true;
  }
}
