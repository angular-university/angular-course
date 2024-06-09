import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild("containerRef") containerDiv: ElementRef;
  @ViewChild("cardRef") card: CourseCardComponent;
  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards) => console.log(cards));
  }

  onCourseSelected(course: Course) {
    console.log("app compnent - button clicked ....", course);
  }

  trackCourse(index: number, course: Course) {
    return index + course?.id;
  }
}
