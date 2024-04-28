import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  // courses;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10")

      this.courses$ = this.http.get<Course[]>('/api/courses', {params})

  }

  //   this.http.get('/api/courses', {params})
  //     .subscribe(
  //       courses => this.courses = courses
  //     );
  // }



}
