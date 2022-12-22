import { Component, Input, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { EventEmitter } from '@angular/core';
import { Course } from "../model/course";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;
  // This property is used on the parent component's HTML template file and is in square brackets for property binding. The value for this comes from a property in the parent's 
  // TypeScript file.


  @Output()
  courseSelected = new EventEmitter<Course>();
  // This property is used in the parent component to trigger a method in the parent component's TypeScript file to run when the event occurs. The object emitted to the parent component in 
  // this case is of a type Course.

  constructor() { }

  ngOnInit() {

  }

  onCourseViewed() {

    console.log("card component - button clicked...");

    this.courseSelected.emit(this.course);
    // emit is used to actuaally trigger the event handler on the parent component's HTML template file. In this case what is emitted is the specific course object that was clicked 
    // on. emit is attached to the property that is the EventEmitter.
  }

}
