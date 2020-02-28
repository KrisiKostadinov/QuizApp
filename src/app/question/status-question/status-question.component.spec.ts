import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusQuestionComponent } from './status-question.component';

describe('StatusQuestionComponent', () => {
  let component: StatusQuestionComponent;
  let fixture: ComponentFixture<StatusQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
