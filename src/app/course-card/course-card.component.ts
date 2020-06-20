import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'course-card', // defines html tag
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
//need to import Input or it will not compile!!
  @Input()
  title:string; //  we define as an input property of the course card, now to the template

  constructor() { }

  ngOnInit(): void {
  }

}
// comment
