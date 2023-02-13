import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksProjectComponent } from './list-tasks-project.component';

describe('ListTasksProjectComponent', () => {
  let component: ListTasksProjectComponent;
  let fixture: ComponentFixture<ListTasksProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTasksProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTasksProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
