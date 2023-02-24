import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { EventEmitter } from '@angular/core';
import { Course } from "../model/course";
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course:Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngAfterViewInit() {
    }

  ngOnInit() { }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }

    // if (this.course.category == 'BEGINNER') {
    //   return ['beginner'];
    // }

    // return {
    //   'beginner': this.course.category == 'BEGINNER',
    // }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
