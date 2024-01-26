import {Component, computed, effect, EffectRef, signal} from '@angular/core';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';
import {CounterService} from './counter.service';
import {COURSES} from '../db-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    NgForOf
  ],
  standalone: true
})
export class AppComponent {

  courses = COURSES;

  derivedCounter = computed(() => {

    const counter = this.counterService.counter();

    return counter * 10;

  });

  constructor(
    public counterService: CounterService) {

  }

  increment() {

    this.counterService.increment();

  }

}
