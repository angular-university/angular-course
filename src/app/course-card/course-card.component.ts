import { Component, EventEmitter, OnInit , Input, Output} from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card', // defines html tag
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
//need to import Input or it will not compile!!
  @Input()
  course: Course; //  from the model folder

  // emit custom event (note the type Course passed)
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("card component button clicked");
    this.courseSelected.emit(this.course);
  }

}
// comment
