import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseImageComponent } from './course-image.component';

describe('CourseImageComponent', () => {
  let component: CourseImageComponent;
  let fixture: ComponentFixture<CourseImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
