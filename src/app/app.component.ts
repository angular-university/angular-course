import {Component, computed, effect, EffectRef, signal} from '@angular/core';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';


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

  counter = signal(0);

  derivedCounter = computed(() => {

    const counter = this.counter();

    return counter * 10;

  });

  effectRef: EffectRef;

  constructor() {

    this.effectRef = effect((onCleanup) => {

      onCleanup(() => {


        console.log(`Cleanup occurred!`);

      });

      const counterValue = this.counter();

      const derivedCounterValue = this.derivedCounter();

      console.log(` counter: ${counterValue} derived counter: ${derivedCounterValue}`);

    },
      {
        manualCleanup: true
      });

  }

  increment() {

    this.counter.update(val => val + 1);

  }


  onCleanup() {
    this.effectRef.destroy();
  }
}
