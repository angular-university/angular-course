import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Course } from '../model/course';






@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')

  courseSelected = new EventEmitter<Course>();
  
  constructor() {

  }
  ng0Init() {

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {

    console.log("card component - button clicked ...")

    this.courseSelected.emit(this.course)

  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

}

  // cardClasses() {
  //   return {
  //     'beginner': this.course.category === 'BEGINNER',
  //     'course-card': true
  //   }
  // }

  // cardClasses() {
  //   return {
  //     'beginner': true,
  //     'course-card': true
  //   }
  // }

