import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class CourseTitleComponent implements OnInit {

   @Input()
  title:string;

  constructor() { }

  ngOnInit() {
  }

}
