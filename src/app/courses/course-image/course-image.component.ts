import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}
