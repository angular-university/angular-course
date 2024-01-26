import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, computed, DoCheck, effect,
  EventEmitter, input,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';
import {CommonModule, NgIf} from '@angular/common';


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

  course = input<Course>(null);

  constructor() {

    effect(() => {

      console.log(`New course value: `, this.course());

    });

  }

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  onTitleChanged(newTitle: string) {

    this.course().description = newTitle;

  }

  onSaveClicked(description: string) {

    this.courseEmitter.emit({...this.course(), description});

  }


}
