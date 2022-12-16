import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data'
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

  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log("card component - button clicked ...");

    this.courseSelected.emit(this.course);
  }

}
