import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter, input,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output
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
export class CourseCardComponent implements  OnInit {

    course = input<Course>();

    cardIndex = input<number>();

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    ngOnInit() {


    }

    onTitleChanged(newTitle: string) {

        this.course().description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course(), description});

    }


}
