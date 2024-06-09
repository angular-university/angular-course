import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({ required: true }) course: Course;
  @Input({ required: true }) cardIndex: number;
  @Input() noImageTpl: TemplateRef<any>;
  @Output("courseSelected") courseEmitter = new EventEmitter<Course>();
  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log(this.images);
  }

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return ["beginner"];
    }
  }

  cardStyles() {
    return { "text-decoration": "none" };
  }
}
