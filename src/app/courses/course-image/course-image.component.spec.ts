import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourseImageComponent } from './course-image.component';

describe('CourseImageComponent', () => {
  let component: CourseImageComponent;
  let fixture: ComponentFixture<CourseImageComponent>;

  beforeEach(waitForAsync(() => {
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
