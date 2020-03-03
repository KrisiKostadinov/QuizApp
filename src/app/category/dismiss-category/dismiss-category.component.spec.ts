import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissCategoryComponent } from './dismiss-category.component';

describe('DismissCategoryComponent', () => {
  let component: DismissCategoryComponent;
  let fixture: ComponentFixture<DismissCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DismissCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
