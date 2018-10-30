import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}
