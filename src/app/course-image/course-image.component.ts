import { Component, Input } from "@angular/core";

@Component({
  selector: "course-image",
  templateUrl: "./course-image.component.html",
  styleUrl: "./course-image.component.css",
})
export class CourseImageComponent {
  @Input('src') imageUrl: string;

  constructor() {
    console.log(this.imageUrl);
  }
}
