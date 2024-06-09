import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseImageComponent } from './course-image.component';

describe('CourseImageComponent', () => {
  let component: CourseImageComponent;
  let fixture: ComponentFixture<CourseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
