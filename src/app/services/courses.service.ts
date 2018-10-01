import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private http: HttpClient) {

  }

  loadCourses() {
    return this.http.get<Course[]>('/api/courses');
  }

  saveCourse(course: Course) {
    return this.http.put(`/api/courses/${course.id}`, course);
  }

}
