import { CoursesModule } from './courses.module';

describe('CoursesModule', () => {
  let coursesModule: CoursesModule;

  beforeEach(() => {
    coursesModule = new CoursesModule();
  });

  it('should create an instance', () => {
    expect(coursesModule).toBeTruthy();
  });
});
