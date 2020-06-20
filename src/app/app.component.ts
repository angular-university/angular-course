import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// this is how we make available the course objects so that we can display different course cards
// now these are available in the AppComponent template
    coreCourse = COURSES[0];
    rjsCourse = COURSES[1];
    ngrxCourse = COURSES[2];


}
