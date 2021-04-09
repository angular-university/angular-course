import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {HttpClient, HttpParams} from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    // in order to instantiate the Application Component Class,
    // Angular is going to invoke the constructor and pass the multiple dependencies
    // once it is done, Angular will then call ngOnInit() method

    courses;

    // coursesTotal = this.courses.length;

    constructor(
        private http: HttpClient,
        // an angular built in service, Http service that is used to fetch data from the backend
        // inject it in the class via the constructor
        // declaring a reference to the service and Angular will know when it instantiates this class
        // that it needs to provide this dependency

        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector) {

    }

    ngOnInit() {
      // tslint:disable-next-line:max-line-length
      // the best place to put some initialization logic such as triggering an HTTP backend call that is going to fetch the data that this component needs
      // a lifecycle hook that will be called by the Angular framework itself and not by us

      const params = new HttpParams()
        .set('page', '1')
        .set('pageSize', '10');
      // adding get parameters
      // this class has an immutability based api, if we want to change the parameters being passed (currently none)
      // we need to call the set method

      this.http.get('/api/courses', {params})
      // an observable, we need to subscribe to it to trigger it
        .subscribe(
          courses => this.courses = courses
          // a success handler, a function that is going to give us back the value returned by the api call
        );
        const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});

        customElements.define('course-title', htmlElement);

    }

    onEditCourse() {

            this.courses[1].category = 'ADVANCED';

    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }


}
