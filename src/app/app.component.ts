import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourse = COURSES[0];
  // the data from COURSES[0] populates coreCourse - same with otherse below

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  onCourseSelected(course:Course) {

    // what is being passed in as the argument is the $event from the child component TypeScript file, which is the object being emitted by that component's method.
   
    console.log("App component - click event bubbled...", course);
  }

}
