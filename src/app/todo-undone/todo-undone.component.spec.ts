import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUndoneComponent } from './todo-undone.component';

describe('TodoUndoneComponent', () => {
  let component: TodoUndoneComponent;
  let fixture: ComponentFixture<TodoUndoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUndoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
