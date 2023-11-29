import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../model/course';
import {NgIf} from '@angular/common';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  imports: [
    NgIf
  ],
  standalone: true

})
export class CourseCardComponent {

    @Input()
    course: Course;

    @Input({required:true})
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();


    onCourseViewed() {

      console.log('Card component - button clicked ...');
      this.courseEmitter.emit(this.course);

    }


}
