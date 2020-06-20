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
// { this is how the elements of array COURSES look like
//     id: 1,
//     description: "Angular Core Deep Dive",
//     iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
//     longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
//     category: 'INTERMEDIATE',
//     lessonsCount: 10
// }
// these are defined in db-data.ts 
    coreCourse = COURSES[0];
    rjsCourse = COURSES[1];
    ngrxCourse = COURSES[2];


}
